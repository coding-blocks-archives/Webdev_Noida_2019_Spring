const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const {
  Users
} = require('./db')

passport.use(new LocalStrategy(
  function (username, password, done) {

    Users.findOne({
      where: {
        username: username
      }
    }).then((user) => {

      if (!user) {
        return done(null, false)
      }

      if (user.password != password) {
        return done(null, false)
      }

      done(null, user)

    }).catch(done)

  }
))

passport.use(new FacebookStrategy({
  clientID: '510074252855921',
  clientSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
  callbackURL: 'http://localhost:8877/login/facebook/callback'
}, async function (token, rt, profile, done) {
  let user = await Users.findOne({
    where: {
      fbId: profile.id
    }
  })
  if (user) {
    return done(null, user)
  }
  user = await Users.create({
    fbToken: token,
    fbId: profile.id,
    username: profile.displayName
  })
  done(null, user)
}))

passport.serializeUser(
  function (user, done) {
    done(null, user.id)
  }
)

passport.deserializeUser(
  function (userId, done) {
    Users.findByPk(userId)
      .then((user) => {
        done(null, user)
      })
      .catch(done)
  }
)
module.exports = passport
