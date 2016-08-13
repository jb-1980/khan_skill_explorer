import React, {Component} from 'react'
import {connect} from 'react-redux'

import Select from 'react-virtualized-select'
import 'react-select/dist/react-select.css'
import 'react-virtualized-select/styles.css'

import {selectSkill, getSkillList} from '../actions'

import SkillList from './SkillList'

@connect((state) => ({
  isFetching: state.skill_explorer.skill_list.isFetching,
  skill_list: state.skill_explorer.skill_list.skills,
  value: state.skill_explorer.skill_list.value
}),{selectSkill, getSkillList})
export default class Selector extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {getSkillList} = this.props
    getSkillList()
  }

  render(){
    const {value, skill_list, isFetching, selectSkill} = this.props
    const hidden = isFetching ? 'hidden' : ''

    return (
      <div>
        <ul className={"nav nav-list "+hidden}>
          <form>
            <div className="form-group">
            <li>
              <input
                className="form-control floating-label"
                type="text"
                name="suggestion"
                value={value}
                id="suggestion"
                placeholder="Type to find an exercise"
                onChange={selectSkill}
              />
            </li>
            <span className="material-input"></span>
            </div>
          </form>
        </ul>
        <SkillList/>
      </div>
    )
  }
}
