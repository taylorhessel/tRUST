var express = require('express')
var router = express.Router()
var passport = require('passport')

router.get('/', function(req, res, next) {
    req.logout()
    res.json({message:"user logged out"})
})

module.exports = router
