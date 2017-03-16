(function(users){
    var db = require('./db');
    users.getAllUsers = function(callback){
        var sql = 'SELECT UserId, Username, Password, Email, FullName, SiteIdFk FROM cs6400_sp17_team025.user;';
        db.query(sql, function (error, data) {
            if (error) {
                callback(error, null);
            }
            else {
                callback(null, data);
            }
        });
    };
})(module.exports);
