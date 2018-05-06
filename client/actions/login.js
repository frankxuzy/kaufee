import loginUserReq from '../apiClient'
import saveUserToken from '../utils/auth'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin () {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false
  }
}

export function receiveLogin (user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

function loginError (message) {
  return {
    type: LOGIN_FAILURE,
    message
  }
}

export function loginUser (creds) {
  return dispatch => {
    dispatch(requestLogin())
    return loginUserReq('post', creds)
      .then(res => {
        if (!res.ok) {
          dispatch(loginError(res.body.message))
          return Promise.reject(res.body.message)
        } else {
          const userInfo = saveUserToken(res.body.token)
          dispatch(receiveLogin(userInfo))
        }
      })
  }
}
