const Properties = require('../util/yaml_reader.js');
const { MongoClient } = require('mongodb');

var db_properties = Properties("../secure_properties/properties.yaml").db;
const mongoURL = db_properties.mongoURL;
const dbName = db_properties.database;

var db;

MongoClient.connect(mongoURL, (err, client) => {
    if(err) {
        console.log("Error while connecting");
    }
    db = client.db(dbName);
});

function run(collectionName) {
    try {
        var collection = db.collection(collectionName);
        console.log(collection.find().toArray());
    } finally {
    }
}

run("users");