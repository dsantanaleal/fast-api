const fs = require('fs');
const yaml = require('js-yaml');

var readYmlFile = function(filePath) {
    try {
        let fileContents = fs.readFileSync(filePath, 'utf8');
        let data = yaml.safeLoad(fileContents);
        return data;
    } catch (e) {
        console.log(e);
    }
}

module.exports = readYmlFile;