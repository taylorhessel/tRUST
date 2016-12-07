var express = require('express')
var router = express.Router()
var passport = require('passport')

router.get('/',
  function(req, res, next) {
      req.url = req.originalUrl
      next()
  },
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/')
  })

module.exports = router
