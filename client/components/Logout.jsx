import React from 'react'
import {connect} from 'react-redux'

import {logoutUser} from '../actions/logout'

const Logout = ({logoutUser}) => {
  return (
    <div>
      <a onClick={logoutUser}>Logout</a>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
