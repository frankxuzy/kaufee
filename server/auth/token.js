const jwt = require('jsonwebtoken')

const db = require('../db/users')

module.exports = {
  issue
}

function issue (req, res) {
  db.getCredsByName(req.body.username)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
    .catch(err => {
      return res.status(403).json({
        message: 'Authentication failed',
        info: err.message
      })
    })
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: '1d'
  })
}
