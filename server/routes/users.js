const express = require('express')

const db = require('../db/orders')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
