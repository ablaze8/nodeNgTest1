(function (db) {
    db.connection = undefined;
    db.connect = function () {
        var mysql = require('mysql');
        db.connection = mysql.createConnection({
            host: 'localhost',
            user: 'atalati6',
            password: '????',
            database: 'cs6400_sp17_team025'
        });
        db.connection.connect();
    };
    db.query = function (sqlQuery, callback) {
        if (db.connection == null || db.connection == undefined) {
            db.connect();
        }
        db.connection.query(sqlQuery, function (error, result) {
            if (error) {
                console.log(error);
                callback(error, null);
            }
            else {
                callback(null, result);
            }
        });
    };
})(module.exports);