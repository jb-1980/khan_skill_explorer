import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {fetchSkill} from '../actions'

@connect((state) => ({
  isFetching: state.skill_explorer.skill.isFetching,
  skill: state.skill_explorer.skill.skill_props,
  skill_name: state.skill_explorer.skill.skill_name,
  skill_list: state.skill_explorer.skill_list.skills
}), {fetchSkill})
export default class SkillView extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {skill_name, fetchSkill} = this.props
    if(skill_name){
      fetchSkill(skill_name)
    }

  }

  componentWillReceiveProps(nextProps){
    const {skill_name, fetchSkill} = nextProps
    if(skill_name){
      fetchSkill(skill_name)
    }
  }

  render(){
    const {isFetching,skill,skill_list, fetchSkill} = this.props
    if(isFetching){
      return (
        <div>Fetching skill data</div>
      )
    } else if(!skill){
      return (
        <div>Select skill from menu</div>
      )
    }

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
                     <Link to={video} style={{fontSize:"1.2em"}}>{video}</Link>
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
                  if(!skill_list[prereq]){
                    return (
                      <li className="withripple" key={key}>
                        <Link
                          to={"/skill_explorer/"+prereq}
                          style={{fontSize:"1.2em"}}>
                          {prereq}
                        </Link>
                      </li>
                    )
                  }
                 return (
                   <li className="withripple" key={key}>
                     <Link
                       to={"/skill_explorer/"+prereq}
                       style={{fontSize:"1.2em"}}
                       >
                       {skill_list[prereq].display_name}
                     </Link>
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
          {skill.translated_description || "No description given."}
        </div>
      </div>

    </div>
    )
  }
}
