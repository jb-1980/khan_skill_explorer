import React, {Component} from 'react'

import Sidebar from '../components/Sidebar'

export default class MissionExplorer extends Component{

  render(){
    return(
      <div>
        <div className="col-sm-4 col-md-3 sidebar">
          <Sidebar/>
        </div>
        <div className="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
          {this.props.children}
        </div>
      </div>
    )
  }
}
