var locomotive = require('locomotive'),
    Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.main = function() {
  this.title = 'Locomotive';
  this.render({ user: this.req.user, message: this.req.flash('error') });
};

PagesController.about = function() {
  this.title = 'About';
  this.render({ user: this.req.user, message: this.req.flash('error') });
};

module.exports = PagesController;
