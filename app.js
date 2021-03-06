// dependencies
var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose');
var assert        = require('assert');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// models
var User = require('./models/users');
// just used for testing
// var Dishes        = require('./models/dishes');
// var Leaders       = require('./models/leaders');
// var Promotions    = require('./models/promotions');

// project config
var config        = require('./config');

// connect to mongodb
mongoose.connect(config.mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("Connected correctly to mongodb server");

});

// web app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// passport config
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Secure traffic only
app.all('*', function(req, res, next){
  console.log('req start: ',req.secure, req.hostname, req.url, app.get('port'));
  if (req.secure) {
    return next();
  };

  console.log('Redirect!');
  res.redirect('https://'+req.hostname+':'+app.get('secPort')+req.url);
});

// routers
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',            require('./routes/index'));
app.use('/users',       require('./routes/users'));
app.use('/dishes',      require('./routes/dishes'));
app.use('/promotions',  require('./routes/promotions'));
app.use('/leaders',     require('./routes/leaders'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })
  // res.render('error');
});

module.exports = app;
