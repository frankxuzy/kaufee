import React from 'react'
import {connect} from 'connect'

import {logoutUser} from '../action/logout'

const Logout = () => {
  return (
    <div>

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
