import {combineReducers} from 'redux'

import currentOrder from './currentOrder'
import userList from './userList'
import register from './register'

export default combineReducers({
  currentOrder,
  userList,
  register
})
