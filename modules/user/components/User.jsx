import React, {Component} from 'react'
import {connect} from 'react-redux'

import {authenticateUser} from '../actions'

@connect((state) => ({
  isAuthenticated: state.user.authenticated,
  khan_data: state.user.khan_data
}),{authenticateUser})
export default class MissionTable extends Component{
  render(){
    const {isAuthenticated, khan_data, authenticateUser} = this.props

    if(isAuthenticated){
      return (
        <div>You are authenticated</div>
      )
    }

    return (
      <div>
        <button onClick={authenticateUser}>Authenticate</button>
      </div>
    )
  }
}
