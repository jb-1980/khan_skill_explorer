import fetch from 'isomorphic-fetch'

export const SELECT_SKILL = 'SELECT_SKILL'
export const REQUEST_SKILL = 'REQUEST_SKILL'
export const RECEIVE_SKILL = 'RECEIVE_SKILL'
export const REQUEST_SKILL_LIST = 'REQUEST_SKILL_LIST'
export const RECEIVE_SKILL_LIST = 'RECEIVE_SKILL_LIST'

export function selectSkill(e){
  return {
    type: SELECT_SKILL,
    value: e.target.value
  }
}

export function requestSkill(skill){
  return {
    type: REQUEST_SKILL
  }
}

export function receiveSkill(json){
  return {
    type: RECEIVE_SKILL,
    skill_props: json
  }
}

export function requestSkillList(){
  return {
    type: REQUEST_SKILL_LIST
  }
}

export function receiveSkillList(skill_list){
  return {
    type: RECEIVE_SKILL_LIST,
    skills: skill_list
  }
}

export function getSkillList(){
  return function(dispatch) {
    dispatch(requestSkillList())

    const url = 'https://www.khanacademy.org/api/internal/exercises/math_topics_and_exercises'
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        var skill_list = json.exercises.map(skill => {
          return {
            name: skill.name,
            title: skill.display_name
          }
        })

        dispatch(receiveSkillList(skill_list))
      })

  }
}

export function fetchSkill(skillname){
  return function(dispatch) {
    dispatch(requestSkill())

    const url = 'http://www.khanacademy.org/api/v1/exercises/'+skillname
    return fetch(url)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveSkill(json))
      )

  }
}
