const Properties = require('../util/yaml_reader.js');
const MongoClient = require('mongodb').MongoClient;
let db_properties = Properties("./secure_properties/properties.yaml");
let callback, db;
// Connection URL
const mongoURL = db_properties.db.mongoURL;
// Database Name
const dbName = db_properties.db.database;

console.log(mongoURL);
console.log(dbName);

// Use connect method to connect to the server
MongoClient.connect(mongoURL, (err, client) => {
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