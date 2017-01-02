var User    = require('../models/users');
var jwt     = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config  = require('../config.js');

exports.getToken = function (user) {
  return jwt.sign(
    user,
    config.secretKey,
    {
      expiresIn: 3600
    }
  );
};

exports.verifyOrdinaryUser = function (req, res, next) {
  console.log("req.method: ", req.method);
  console.log("req.baseUrl: ", req.baseUrl);
  console.log("req.originalUrl: ", req.originalUrl);

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(
      token,
      config.secretKey,
      function (err, decoded) {
        if (err) {
          var err = new Error('You are not authenticated 1!');
          err.status = 401;
          return next(err);
        }
        else {
          // if everything is good, save to request for use in other routes
          console.log("decoded: ", decoded._doc.admin, decoded._doc.username);
          console.log("config.privilige: ", config.privilige[req.originalUrl][req.method]);
          req.decoded = decoded;
          if(config.privilige[req.originalUrl][req.method]) {
            if(decoded._doc.admin) {
              console.log("next go go go 1!");
              next();
            }
            else {
              var err = new Error('You are not authenticated 2!');
              err.status = 401;
              return next(err);
            }
          }
          else {
            console.log("next go go go 2!");
            next();
          }
        }
      }
    );
  }
  else {
    // if there is no token
    // return an error
    var err = new Error('No token provided!');
    err.status = 403;
    return next(err);
  }
};
