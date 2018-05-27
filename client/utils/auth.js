import decode from 'jwt-decode'
import {get, set} from './localStorage'

export const isAuthenticated = () => {
  const token = get('token')

  if (token !== null) {
    const payload = decode(token)
    const expire = payload.expire

    if (expire < new Date().getTime() / 1000) {
      removeuser()
      return false
    }

    return true
  } else {
    return false
  }
}

export function removeuser () {
  set('token', null)
}

export function saveUserToken (token) {
  set('token', token)
  return decode(token)
}
