var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  if (req.user) {
    res.json(req.user)
  }
})

module.exports = router
