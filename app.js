var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose');
var assert        = require('assert');

// models
var Dishes        = require('./models/dishes');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("Connected correctly to mongodb server");

/* This is Test 1
  // create a new dish
  var newDish = Dishes({
    name:         'Dish1',
    description:  'Test1'
  });

  // save the dish
  newDish.save(function (err) {
    if (err) throw err;
    console.log('Dish1 created!');

    // get all the users
    Dishes.find({}, function (err, dishes) {
      if (err) throw err;
      console.log('Dish1 found!');

      // object of all the users
      console.log(dishes);

      db.collection('dishes').drop(function () {
        console.log('Dish1 dropped!');
        db.close();
      });
    });
  });
*/
/* This is Test 2
  // create a new dish
  Dishes.create(
    {
      name: 'Dish2',
      description: 'Test2'
    },
    function (err, dish) {
      if (err) throw err;
      console.log('Dish2 created!');
      console.log("Dishes.create: ", dish);

      var id = dish._id;

      // get all the dishes
      setTimeout(
        function () {
          Dishes.findByIdAndUpdate(
            id,
            {
              $set: {
                description: 'Updated Test'
              }
            },
            {
              new: true
            }
          )
          .exec(function (err, dish) {
            if (err) throw err;
            console.log('Updated Dish!');
            console.log("Dishes.findByIdAndUpdate: ", dish);

            db.collection('dishes').drop(function () {
              console.log('Dish2 dropped!');
              db.close();
            });
          });
        },
        3000
      );
    }
  );
*/
});

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
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
