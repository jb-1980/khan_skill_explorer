import { combineReducers } from 'redux'
import {
  SELECT_SKILL, REQUEST_SKILL,
  RECEIVE_SKILL, REQUEST_SKILL_LIST,
  RECEIVE_SKILL_LIST, SET_SKILL_NAME
} from '../actions'



function skill_list(state = {
  isFetching: true,
  value: '',
  skills: {}
}, action) {
  switch (action.type) {
    case SELECT_SKILL:
      return Object.assign({}, state, {
        isFetching: false,
        value: action.value
      })

    case REQUEST_SKILL_LIST:
      return Object.assign({}, state, {
        isFetching: true,
      })

    case RECEIVE_SKILL_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        skills: action.skills
      })

    default:
      return state
  }
}

function skill(state = {
    isFetching: false,
    skill_name: '',
    skill_props: null
}, action) {
    switch(action.type){
      case REQUEST_SKILL:
        return Object.assign({}, state, {
          isFetching: true,
          skill_name: action.skill_name
        })

      case RECEIVE_SKILL:
        return Object.assign({}, state, {
          isFetching: false,
          skill_props: action.skill_props
        })

      case SET_SKILL_NAME:
        return Object.assign({}, state, {
          skill_name: action.skill_name
        })

      default:
        return state
    }
}

const rootReducer = combineReducers({
  skill,
  skill_list
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
