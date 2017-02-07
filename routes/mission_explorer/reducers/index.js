import { combineReducers } from 'redux'
import {
  SELECT_MISSION, REQUEST_MISSION,
  RECEIVE_MISSION, REQUEST_MISSION_LIST,
  RECEIVE_MISSION_LIST
} from '../actions'



function mission_list(state = {
  isFetching: true,
  selected: '',
  missions: []
}, action) {
  switch (action.type) {
    case SELECT_MISSION:
      return Object.assign({}, state, {
        isFetching: false,
        selected: action.selected
      })

    case REQUEST_MISSION_LIST:
      return Object.assign({}, state, {
        isFetching: true,
      })

    case RECEIVE_MISSION_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        missions: action.missions
      })

    default:
      return state
  }
}

function mission(state = {
    isFetching: false,
    mission_props: {}
}, action) {
    switch(action.type){
      case REQUEST_MISSION:
        return Object.assign({}, state, {
          isFetching: true,
        })

      case RECEIVE_MISSION:
        return Object.assign({}, state, {
          isFetching: false,
          mission_props: action.mission_props
        })

      default:
        return state
    }
}

const rootReducer = combineReducers({
  mission,
  mission_list
})

export default rootReducer

/**
  State shape
{
  skill: {
    isFetching: false,
    skill_props: {...}
  },
  skill_list: {
    isFetching: false,
    selected: 'skill_name',
    skills: [
      {value: 'skill_one', label: 'Skill One'},
      {value: 'skill_two', label: 'Skill Two'}
    ]
  }
}

*/
