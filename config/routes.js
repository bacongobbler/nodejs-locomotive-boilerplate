// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
var passport = require('passport');

module.exports = function routes() {
    this.root('pages#main');

    this.match('about', 'pages#about');

    this.match('login', 'auth#login'); 
    this.match('login',
        passport.authenticate('local', { successRedirect: '/',
                                         failureRedirect: '/login',
                                         failureFlash: true }),
        { via: 'post' });
    
    this.match('logout', 'auth#logout');
    
    this.match('signup', 'auth#signup', { via: ['get', 'post'] });
    
    // this.match('account', ensureAuthenticated, function(req, res){
    //     res.render('account', { user: req.user });
    // });
}

// Simple route middleware to ensure user is authenticated.
// Use this route middleware on any resource that needs to be protected. If
// the request is authenticated (typically via a persistent login session),
// the request will proceed. Otherwise, the user will be redirected to the
// login page.
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('login');
    }
}