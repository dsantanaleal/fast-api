const mongo = require("../config/db_con.js");

mongo((db) => {
     var con = db.collection("asignacion_activos");

     con.find({cod:'83928932'}, (err, result) => {
          if(err) throw err;
          result.toArray((err, res)=>{
               console.log(res);
          });
     });
     /*con.findOne({}, (err, result) => {
          if (err) throw err;
          console.log(result.users[0].nomUser);
          //db.close();
     });*/
})

module.exports = {
    "buscarActivo": (codActivo) => {
        let activo;
        mongo((db) => {
            var con = db.collection("asignacion_activos");
       
            con.findOne({cod:codActivo}, (err, result) => {
                 if(err) throw err;
                 activo = result;
            });
       })
       return activo;
    }
}