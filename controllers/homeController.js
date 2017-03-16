(function (homeController){
    var users = require('../data/users');
    homeController.init = function (app) {
        app.get('/', function (req, res) {
            users.getAllUsers(function(err, results){
                console.log(results);
                res.render('index', { title: 'express and vash', error: err, users: results });
            });
        });
    };
})(module.exports);