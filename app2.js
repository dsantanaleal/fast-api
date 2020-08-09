/*const operations = require('./model/bd.js');

operations();
*/
const mongo = require("./model/bd.js");

mongo((db) => {
     var con = db.collection("users");
     con.findOne({}, function(err, result) {
          if (err) throw err;
          console.log(result.users[0].nomUser);
          //db.close();
     });
})