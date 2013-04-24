var locomotive = require('locomotive'),
    Controller = locomotive.Controller,
    mongoose = require('mongoose'),
    User = require('../models/user');

var AuthController = new Controller();

AuthController.login = function() {
    this.render({ user: this.req.user, message: this.req.flash('error') });
};

AuthController.logout = function() {
    this.req.logOut();
    this.res.redirect('/');
};

AuthController.signup = function() {
    var controller = this;
    
    if (this.req.method === 'GET') {
        this.render({ user: this.req.user, message: this.req.flash('error') });
    } else {
        // check if the two passwords entered are different
        if (this.param('password') != this.param('confirm-password')) {
            controller.req.flash('error', 'The two passwords are different');
            controller.res.redirect('signup');
        }
        else {
            User.registerUser(this.param('username'), this.param('email'), this.param('password'), function(err, user) {
                if (err) {
                    console.log(err);
                } else {
                    controller.redirect('/');
                }
            });
        }
    }
};

module.exports = AuthController;
