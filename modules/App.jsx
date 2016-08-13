import React, {Component} from 'react'
import {IndexLink} from 'react-router'
import {connect} from 'react-redux'

import User from './user/components/User'
import NavLink from './NavLink'

@connect((state) => ({
  isAuthenticated: state.user.authenticated,
  khan_data: state.user.khan_data
}),{})
export default class App extends Component{
  render() {
    const {isAuthenticated, khan_data, children} = this.props

    if(!isAuthenticated){
      return <User/>
    }

    return (
      <div>
        <div className="bs-component">
          <div className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <NavLink to="/" className="navbar-brand">Mission Control</NavLink>
              </div>
              <div className="navbar-collapse collapse navbar-responsive-collapse">
                <ul className="nav navbar-nav">
                  <li><NavLink to="/skill_explorer">Skill View</NavLink></li>
                  <li><NavLink to="/mission_explorer">Mission Matrix</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {children}
          </div>
        </div>
      </div>
    )
  }
}
