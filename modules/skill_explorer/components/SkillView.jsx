import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchSkill} from '../actions'

@connect((state) => ({
  isFetching: state.skill_explorer.skill.isFetching,
  skill: state.skill_explorer.skill.skill_props,
  skill_name: state.skill_explorer.skill_list.selected
}), {fetchSkill})
export default class SkillView extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {fetchSkill, selected} = this.props
    if(selected){
      fetchSkill(selected)
    }

  }

  render(){
    const {isFetching,skill} = this.props
    if(isFetching || !skill){
      return (
        <div>Fetching skill data</div>
      )
    }
    console.log(skill)
    return(
      <div>
        <h2>{skill.title}</h2>
        <div id="image" style={{float:'left',paddingRight:'10px'}}>
          <img
            src={skill.image_url_256}
            className="img-thumbnail"
            style={{
              width:"256px",
              height:"256px",
              padding:"20px",
              backgroundColor:"#fff"}}
          />
        </div>
        <div id="info" style={{float:"left"}}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">URL:</h3>
            </div>
            <div className="panel-body">
              <a href={skill.ka_url} target="_blank" style={{fontSize:"1.2em"}}>
                {skill.ka_url}
              </a>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Related Videos:</h3>
            </div>
            <div className="panel-body">
              <ul style={{listStyleType:"none"}}>
              {skill.related_video_readable_ids.map((video, key) => {
                 return (
                   <li className="withripple" key={key}>
                     <a href="{video}" style={{fontSize:"1.2em"}}>{video}</a>
                   </li>
                 )
              })}
              </ul>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Prerequisites:</h3>
            </div>
            <div className="panel-body">
              <ul style={{listStyleType:"none"}}>
              {skill.prerequisites.map((prereq, key) => {
                 return (
                   <li className="withripple" key={key}>
                     <a href="{prereq}" style={{fontSize:"1.2em"}}>{prereq}</a>
                   </li>
                 )
              })}
              </ul>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Commoncore Standards:</h3>
            </div>
            <div className="panel-body">
             TODO: Implement me
            </div>
          </div>
        </div>
        <div style={{clear:"both"}}></div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Description:</h3>
        </div>
        <div className="panel-body">
          {skill.translated_description_html || "No description given."}
        </div>
      </div>

    </div>
    )
  }
}
