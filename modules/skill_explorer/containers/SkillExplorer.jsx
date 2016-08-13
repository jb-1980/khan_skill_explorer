import React, {Component, PropTypes} from 'react'

import Sidebar from './Sidebar'
import SkillDisplay from './SkillDisplay'

export default class SkillExplorer extends Component {
  render(){
    return (
      <div>
        <Sidebar/>
        <SkillDisplay/>
      </div>
    )
  }
}
