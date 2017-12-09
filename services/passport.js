const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('./../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // user.id is a shortcut to to ._id property
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  // This callback with have the user information if successful
  async (accessToken, refreshToken, profile, done) => {
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);

    const existingUser = await User.findOne({ googleId: profile.id })

    if (existingUser) {
      return done(null, existingUser);
    }

    const user = await new User({ googleId: profile.id }).save();
    return done(null, user);
  }
));