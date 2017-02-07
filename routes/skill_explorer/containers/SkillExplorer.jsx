import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Sidebar from './Sidebar'
import SkillDisplay from './SkillDisplay'

import {setSkillName} from '../actions'

@connect((state) => ({}), {setSkillName})
export default class SkillExplorer extends Component {

  componentDidMount(){
    const {params, setSkillName} = this.props
    if(params.skill_name){
      setSkillName(params.skill_name)
    }
  }

  componentWillReceiveProps(nextProps){
    const {params, setSkillName} = nextProps
    if(params.skill_name){
      setSkillName(params.skill_name)
    }
  }

  render(){
    return (
      <div>
        <Sidebar/>
        <SkillDisplay params={this.props.params}/>
      </div>
    )
  }
}
