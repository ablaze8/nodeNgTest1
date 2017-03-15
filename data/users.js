(function(users){
    var db = require('./db');
    users.getAllUsers = function(){
        var sql = 'SELECT UserId, Username, Password, Email, FullName, SiteIdFk FROM cs6400_sp17_team025.user;';
        db.query(sql);
    };
})(module.exports);