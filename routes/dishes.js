// dependencies
var express       = require('express');
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose');
var Verify        = require('./verify');

// models
var Dishes        = require('../models/dishes');

// router
var router = express.Router();
router.use(bodyParser.json());

router.route('/')
.get(Verify.verifyOrdinaryUser, function(req,res,next){
  Dishes.find({})
  .populate('comments.postedBy')
  .exec(function (err, dish) {
    if (err) throw err;
    res.json(dish);
  });
})
.post(Verify.verifyOrdinaryUser, function(req, res, next){
  Dishes.create(
    req.body,
    function (err, dish) {
      if (err) throw err;
      console.log('Dish created!');
      var id = dish._id;

      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.end('Added the dish with id: ' + id);
    }
  );
})
.delete(Verify.verifyOrdinaryUser, function(req, res, next){
  Dishes.remove(
    {},
    function (err, resp) {
      if (err) throw err;
      res.json(resp);
    }
  );
});

router.route('/:dishId')
.get(function(req,res,next){
  Dishes.findById(req.params.dishId)
  .populate('comments.postedBy')
  .exec(function (err, dish) {
    if (err) throw err;
    res.json(dish);
  });
})
.put(function(req, res, next){
  Dishes.findByIdAndUpdate(
    req.params.dishId,
    {
        $set: req.body
    },
    {
        new: true
    },
    function (err, dish) {
      if (err) throw err;
      res.json(dish);
    }
  );
})
.delete(function(req, res, next){
  Dishes.findByIdAndRemove(
    req.params.dishId,
    function (err, resp) {
      if (err) throw err;
      res.json(resp);
    }
  );
});

// nested router
// var commentRouter = express.Router({mergeParams: true});
// router.use('/:dishId/comments', commentRouter);

// commentRouter.route('/')
router.route('/:dishId/comments')
.all(Verify.verifyOrdinaryUser)
.get(function (req, res, next) {
  Dishes.findById(req.params.dishId)
  .populate('comments.postedBy')
  .exec(function (err, dish) {
    if (err) throw err;
    res.json(dish.comments);
  });
})
.post(function (req, res, next) {
  Dishes.findById(
    req.params.dishId,
    function (err, dish) {
      if (err) throw err;
      req.body.postedBy = req.decoded._doc._id;
      dish.comments.push(req.body);
      dish.save(function (err, dish) {
        if (err) throw err;
        console.log('Updated Comments!');
        res.json(dish);
      });
    }
  );
})
.delete(Verify.verifyAdmin, function (req, res, next) {
  Dishes.findById(
    req.params.dishId,
    function (err, dish) {
      if (err) throw err;
      for (var i = (dish.comments.length - 1); i >= 0; i--) {
        dish.comments.id(dish.comments[i]._id).remove();
      }
      dish.save(function (err, result) {
        if (err) throw err;
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.end('Deleted all comments!');
      });
    }
  );
});

// commentRouter.route('/:commentId')
router.route('/:dishId/comments/:commentId')
.all(Verify.verifyOrdinaryUser)
.get(function (req, res, next) {
  console.log("req.params: ", req.params);
  Dishes.findById(req.params.dishId)
  .populate('comments.postedBy')
  .exec(function (err, dish) {
    if (err) throw err;
    res.json(dish.comments.id(req.params.commentId));
  });
})
.put(function (req, res, next) {
  // !!!!!!!!!!!!!    IMPORTANT !!!!!!!!!!!!
  // !!!!!!!!!!!!! PLEASE READ FIRST !!!!!!!
  // We delete the existing commment and insert the updated
  // comment as a new comment
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // So, you MUST input complete comment fields in the req.body

  console.log("req.params: ", req.params);
  console.log("req.body: ", req.body);
  if (
    (req.body.rating  == null) ||
    (req.body.comment == null) ||
    (req.body.author  == null) )
  {
    console.log('Imcomplete body fields!');
    res.end('Please prepare all fields!');
    return;
  }

  Dishes.findById(
    req.params.dishId,
    function (err, dish) {
      if (err) throw err;
      dish.comments.id(req.params.commentId).remove();
      req.body.postedBy = req.decoded._doc._id;
      dish.comments.push(req.body);
      dish.save(function (err, resp) {
        if (err) throw err;
        console.log('Updated Comments!');
        res.json(resp);
      });
    }
  );
})
.delete(function (req, res, next) {
  console.log("req.params: ", req.params);
  Dishes.findById(
    req.params.dishId,
    function (err, dish) {
      if (err) throw err;
      if(dish.comments.id(req.params.commentId).postedBy != req.decoded._doc._id) {
        var err = new Error('You are not the author, you cannot perform this operation!');
        err.status = 403;
        return next(err);
      }
      dish.comments.id(req.params.commentId).remove();
      dish.save(function (err, resp) {
        if (err) throw err;
        res.json(resp);
      });
    }
  );
});

module.exports = router;
