const operations = require('./app/util/yaml_reader.js');
var properties = operations("./app/secure_properties/properties.yaml");
console.log(properties.db.mongoURL);
console.log(properties.db.database);
//operations.read('Diego');