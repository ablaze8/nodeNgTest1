(function(db) {
    db.connection = undefined;
    db.connect = function() {
        var mysql = require('mysql');
        db.connection = mysql.createConnection({
            host: 'localhost',
            user: 'atalati6',
            password: '????',
            database: 'cs6400_sp17_team025'
        });
        db.connection.connect();
    };
    db.query = function(sqlQuery) {
        if(db.connection == null || db.connection == undefined){
            db.connect();
        }
        db.connection.query(sqlQuery, function(error, results){
            console.log(results);
        });
    };
})(module.exports);