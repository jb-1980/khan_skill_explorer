import React, {Component} from 'react'

import SkillView from '../components/SkillView'

export default class SkillDisplay extends Component {
  render(){
    return (
      <div className="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
        <SkillView/>
      </div>
    )
  }
}
