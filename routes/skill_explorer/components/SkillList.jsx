import React, {Component} from 'react'
import {connect} from 'react-redux'

import NavLink from '../../NavLink'


@connect((state) => ({
  isFetching: state.skill_explorer.skill_list.isFetching,
  skill_list: state.skill_explorer.skill_list.skills,
  value: state.skill_explorer.skill_list.value
}))
export default class Selector extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const {isFetching, skill_list, value, fetchSkill} = this.props

    if(isFetching){
      return <div>Fetching skill list</div>
    }

    const skills = Object.keys(skill_list).filter(name =>
      // check that the skill name is starts with the input box value
      // and return the first 10 matches
      skill_list[name].display_name.toLowerCase().includes(value.toLowerCase())
    ).slice(0,10)

    const list = skills.map( (name, key) => {
      return (
        <li key={key}className="withripple">
          <NavLink to={"/skill_explorer/"+name}>
            {skill_list[name].display_name}
          </NavLink>
        </li>
      )
    })

    return (
      <ul className="nav nav-list">
        {list}
      </ul>
    )
  }
}
