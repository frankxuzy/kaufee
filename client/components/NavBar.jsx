import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Logout from './Logout'

const NavBar = ({isAuthenticated}) => {
  return (
    <div className="navbar">
      {!isAuthenticated && (
        <div>
          <Link to="/">Home</Link> |
          <Link to="/history"> History</Link> |
          <Link to="/register"> Register</Link> |
          <Link to="/login"> Login</Link>
        </div>
      )}
      {isAuthenticated && <Logout />}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(NavBar)
