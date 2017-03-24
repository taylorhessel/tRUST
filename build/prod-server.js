require('dotenv').config()
require('./check-versions')()
var config = require('../config')
//if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var favicon = require('serve-favicon')
var path = require('path')
var express = require('express')
var session = require('express-session')
var passport = require('passport')
var SteamStrategy = require('passport-steam').Strategy
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.prod.conf')
var bodyParser = require('body-parser')

var login = require('../routes/login')
var logout = require('../routes/logout')
var user = require('../routes/user')
var groups = require('../routes/groups')

// default port where dev server listens for incoming traffic
var port = process.env.PORT
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
//var proxyTable = config.dev.proxyTable

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(obj, done) {
  done(null, obj)
})

passport.use(new SteamStrategy({
    returnURL: 'https://trust-social-networking.herokuapp.com/login',
    realm: 'https://trust-social-networking.herokuapp.com/',
    apiKey: process.env.STEAM_API_KEY
  },
  function(identifier, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Steam profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Steam account with a user record in your database,
      // and return that user instead.
      profile.identifier = identifier
      return done(null, profile)
    })
  }
))

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
// Object.keys(proxyTable).forEach(function (context) {
//   var options = proxyTable[context]
//   if (typeof options === 'string') {
//     options = { target: options }
//   }
//   app.use(proxyMiddleware(context, options))
// })

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/login', login)
app.use('/logout', logout)
app.use('/user', user)
app.use('/groups', groups)

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  // var uri = 'http://localhost:' + port
  console.log(`Listening at port ${port}`)

  // when env is testing, don't need open it
  // if (process.env.NODE_ENV !== 'testing') {
  //   opn(uri)
  // }
})
