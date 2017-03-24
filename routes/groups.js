var express = require('express')
var router = express.Router()
var queries = require('../db/queries')

router.get('/', (req, res, next) => {
  queries.getGroups().then((groups) => {
    res.json(groups)
  })
})

router.post('/', (req, res, next) => {
  if (req.user) {
    queries.addGroup(req.body).then((status) => {
      res.json(status)
    })
  }
})

module.exports = router
