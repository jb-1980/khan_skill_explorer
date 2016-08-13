import React, {Component} from 'react'
import {connect} from 'react-redux'

import NavLink from '../../NavLink'

import {selectMission, getMissionList} from '../actions'

@connect((state) => ({
  isFetching: state.mission_explorer.mission_list.isFetching,
  missions: state.mission_explorer.mission_list.missions,
  mission: state.mission_explorer.mission_list.selected
}),{selectMission, getMissionList})
export default class Sidebar extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {getMissionList} = this.props
    getMissionList()
  }

  render(){
    const {missions,isFetching,selectMission} = this.props

    const mission_list = missions.map((mission,i) => {
      return (
        <li key={i} className="withripple">
          <NavLink
            to={"/mission_explorer/"+mission.slug}
            onClick={selectMission.bind(this,mission.slug)}>{mission.title}</NavLink>
        </li>
      )
    })

    return(
      <div id="units">
        <div style={{width:"100%",borderBottom:"thin solid #009688"}}>
          <span style={{fontWeight:"bold",color:"#009688",fontSize:"1.2em"}}>
              Khan Missions
          </span>
        </div>
        <ul className="nav nav-list">
          {mission_list}
        </ul>
      </div>
    )
  }
}
