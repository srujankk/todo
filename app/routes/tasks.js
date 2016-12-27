var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var dbConn = require('../config').dbConn;


/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect(dbConn,function(err,db){
      if(err){
          return next(err);
      }
      db.collection('tasks').find().toArray(function(err, results){
          if(err){
              console.log(err);
              return next(err);
          }
          //console.log(results);
          res.json(results);
      })
  });

});
/* GET users listing. */
router.post('/', function(req, res, next) {
    var c = req.body;
    MongoClient.connect(dbConn,function(err,db){
        if(err){
            return next(err);
        }
        var tasks = db.collection('tasks');
        tasks.insert(c,function(err,results){
            //console.log(results);
            res.json(results.ops[0]);
        })
    });
});

router.put('/:id', function(req, res, next) {
    var c = req.body;
    MongoClient.connect(dbConn,function(err,db){
        if(err){
            return next(err);
        }
        var tasks = db.collection('tasks');
        console.log(req.params.id);
        tasks.updateOne({_id:new mongodb.ObjectID(req.params.id)},{$set:{done:c.done}},function(err,result){
            if(err){
                return next(err);
            }
            //console.log(result);
            res.json(c);
        })
    });
});

router.delete('/:id', function(req,res,next){
    MongoClient.connect(dbConn,function(err,db){
        if(err){
            return next(err);
        }
        var tasks = db.collection('tasks');
        console.log(req.params.id);
        tasks.deleteOne({_id:new mongodb.ObjectID(req.params.id)},function(err,result){
            if(err){
                return next(err);
            }
            //console.log(result);
            res.send(result);
        })
    });
})

module.exports = router;
