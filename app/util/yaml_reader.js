const fs = require('fs');
const yaml = require('js-yaml');

module.exports = (filePath) => {
    try {
        let fileContents = fs.readFileSync(filePath, 'utf8');
        let data = yaml.safeLoad(fileContents);
        return data;
    } catch (e) {
        console.log(e);
    }
};