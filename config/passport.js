var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , User = require('../app/models/user');

// Use the LocalStrategy within Passport.
// Strategies in passport require a `verify` function, which accept
// credentials (in this case, a username and password), and invoke a callback
// with a user object. In the real world, this would query a database;
// however, in this example we are using a baked-in set of users.
passport.use(new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
        
        user.comparePassword(password, function(err, isMatch) {
            if (err)
            {
                return done(err);
            }
            if(isMatch)
            {
                return done(null, user);
            }
            else
            {
                return done(null, false, { message: 'Invalid password' });
            }
        });
    });
}));

// Passport session setup.
// To support persistent login sessions, Passport needs to be able to
// serialize users into and deserialize users out of the session. Typically,
// this will be as simple as storing the user ID when serializing, and finding
// the user by ID when deserializing.
passport.serializeUser(function(user, done)
{
    done(null, user.id);
});

passport.deserializeUser(function(id, done)
{
    User.findById(id, function (err, user)
    {
        done(err, user);
    });
});

module.exports = passport;
