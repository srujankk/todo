var MongoClient = require('mongodb').MongoClient;
var DBConnection;


MongoClient.connect('mongodb://localhost:27017/todo',function(err,db){
    if(err){
        throw err;
    }
    console.log(db);
    DBConnection = db;
    console.log('connected to DB at localhost:27017');
})
module.exports = DBConnection;