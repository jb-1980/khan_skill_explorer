import React, {Component} from 'react'

import Selector from '../components/Selector'

export default class SideBar extends Component {
  render(){
    return (
      <div className="col-sm-4 col-md-3 sidebar">
        <Selector/>
      </div>
    )
  }
}
