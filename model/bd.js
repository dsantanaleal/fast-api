const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
let callback, db;
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fast-api';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db(dbName);
  callback(db)
  client.close();
});

module.exports = function(cb){
  if(typeof db != 'undefined' ){
    cb(db)
  }else{
    callback = cb
  }
}


/*const MongoClient = require('mongodb');

const mongoURL = "mongodb://localhost:27017";
//var MongoClient = new MongoClient(mongoURL);
const databaseName = "fast-api";
const collectionName = "users";
let db;


MongoClient.connect(mongoURL, (err, client) => {
    if(err) {
        console.log("Error while connecting");
    }
    db = client.db(databaseName);
    callback(db);
    client.close();
});

console.log(db);

function run() {
    var collection = db.collection(collectionName);
    console.log(collection.find().toArray());
}

var operations = {
    read : function() {
        run();
    }
};

module.exports = operations;*/