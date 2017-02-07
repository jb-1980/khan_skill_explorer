import React, {Component} from 'react'
import {connect} from 'react-redux'

import {selectMission, getMissionList} from '../actions'

@connect((state) => ({
  isFetching: state.mission_explorer.mission_list.isFetching,
  missions: state.mission_explorer.mission_list.missions,
  mission: state.mission_explorer.mission
}),{selectMission, getMissionList})
export default class MissionTable extends Component{
  render(){
    const {mission} = this.props

    return(
      <div>
        <h1>{mission.translated_title}</h1>
        <hr/>
        <p>{mission.translated_description}</p>
      </div>
    )
  }
}
