(function (homeController){
    var users = require('../data/users');
    homeController.init = function (app) {
        app.get('/', function (req, res) {
            res.render('index', { title: 'express and vash' });
            users.getAllUsers();
        });
    };
})(module.exports);