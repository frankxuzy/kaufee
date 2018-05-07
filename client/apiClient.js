import request from 'superagent'

export function getCurrentOrder () {
  return request.get('/api/v1/current-order')
    .then(res => {
      return res.body
    })
}

export function registerUser (userDetails) {
  return request.post('/api/v1/auth/register')
    .send(userDetails)
    .then(res => res.body.token)
}

export function getUsers () {
  return request.get('/api/v1/users/')
    .then(res => {
      return res.body
    })
}

export function addOrderItem (userId, orderId) {
  const data = {
    userId,
    orderId
  }
  return request.post('/api/v1/current-order')
    .send(data)
}

export function loginUser (userDetails) {
  return request.post('/api/v1/auth/login')
    .send(userDetails)
    .then(res => res.body.token)
}

export function orderIsComplete (orderId) {
  const data = {
    orderId
  }
  return request.put('/api/v1/current-order/is-complete')
    .send(data)
}

export function addOrder () {
  const data = {
    id: 3,
    items: []
  }
  return request.put('/api/v1/current-order/new-order')
    .send(data)
}
