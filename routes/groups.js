var express = require('express')
var router = express.Router()
var queries = require('../db/queries')

router.get('/', (req, res, next) => {
  // query to get groups goes here
})

router.post('/', (req, res, next) => {
  if (req.user) {
    console.log(req.body)
    queries.addGroup(req.body).then((res) => {
      console.log(res)
    })
  }
})

module.exports = router
