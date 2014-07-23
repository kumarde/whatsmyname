var mongojs = require('mongojs');
var db = mongojs("whatsmyname", ["users"]);

exports.addUser = function(postObject, callback){
      db.users.save(postObject, function(e, data){
              
      })
}
