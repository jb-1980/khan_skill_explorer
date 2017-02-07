import fetch from 'isomorphic-fetch'

export const SELECT_SKILL = 'SELECT_SKILL'
export const REQUEST_SKILL = 'REQUEST_SKILL'
export const RECEIVE_SKILL = 'RECEIVE_SKILL'
export const REQUEST_SKILL_LIST = 'REQUEST_SKILL_LIST'
export const RECEIVE_SKILL_LIST = 'RECEIVE_SKILL_LIST'
export const SET_SKILL_NAME = 'SET_SKILL_NAME'

export function setSkillName(skill_name){
  return {
    type: SET_SKILL_NAME,
    skill_name: skill_name
  }
}

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
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
        let skill_list = {}
        json.exercises.forEach(skill => {
          skill_list[skill.name] = skill
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
      .then(handleErrors)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveSkill(json))
      )

  }
}

// Thanks to https://www.tjvantoll.com/2015/09/13/fetch-and-errors/ for this idea
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
