const express = require('express')
const verifyJwt = require('express-jwt')

const db = require('../db/orders')
// const token = require('../auth/token')

const router = express.Router()

router.use(express.json())

// router.use(verifyJwt({
//   secret: getSecret
// }),
// token.handleError)

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

router.get('/:id', verifyJwt({
  secret: getSecret
}),
(req, res) => {
  if (req.user.id === 1) {
    db.getUsers()
      .then(users => {
        res.json(users)
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  }
})

module.exports = router
