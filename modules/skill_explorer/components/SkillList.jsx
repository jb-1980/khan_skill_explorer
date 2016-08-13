import React, {Component} from 'react'
import {connect} from 'react-redux'

import NavLink from '../../NavLink'
import {fetchSkill} from '../actions'


@connect((state) => ({
  isFetching: state.skill_explorer.skill_list.isFetching,
  skill_list: state.skill_explorer.skill_list.skills,
  value: state.skill_explorer.skill_list.value
}),{fetchSkill})
export default class Selector extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const {isFetching, skill_list, value, fetchSkill} = this.props

    const skills = skill_list.filter(skill =>
      skill.title.toLowerCase().startsWith(value.toLowerCase())
    ).slice(0,10)

    const list = skills.map( (skill, key) => {
      return (
        <li key={key}className="withripple">
          <NavLink
            to={"/skill_explorer/"+skill.name}
            onClick={fetchSkill.bind(this,skill.name)}>{skill.title}</NavLink>
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
