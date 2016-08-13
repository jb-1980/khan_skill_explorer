import fetch from 'isomorphic-fetch'

export const SELECT_MISSION = 'SELECT_MISSION'
export const REQUEST_MISSION = 'REQUEST_MISSION'
export const RECEIVE_MISSION = 'RECEIVE_MISSION'
export const REQUEST_MISSION_LIST = 'REQUEST_MISSION_LIST'
export const RECEIVE_MISSION_LIST = 'RECEIVE_MISSION_LIST'

export function selectMission(mission){
  return function(dispatch) {
    dispatch(fetchMission(mission))
    dispatch({
      type: SELECT_MISSION,
      selected: mission
    })
  }
}

export function requestMission(mission){
  return {
    type: REQUEST_MISSION
  }
}

export function receiveMission(json){
  return {
    type: RECEIVE_MISSION,
    mission_props: json
  }
}

export function requestMissionList(){
  return {
    type: REQUEST_MISSION_LIST
  }
}

export function receiveMissionList(mission_list){
  return {
    type: RECEIVE_MISSION_LIST,
    missions: mission_list
  }
}

export function getMissionList(){
  return function(dispatch) {
    dispatch(requestMissionList())

    const url = 'https://www.khanacademy.org/api/internal/missions'
    return fetch(url)
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveMissionList(json))
      })

  }
}

function fetchMission(mission_name){
  return function(dispatch) {
    dispatch(requestMission())

    const url = 'http://www.khanacademy.org/api/internal/user/mission/'+mission_name
    return fetch(url)
      .then(handleErrors)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveMission(json))
      )

  }
}

function handleErrors(response) {
  if(!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
