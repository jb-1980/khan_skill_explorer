import {combineReducers} from 'redux'
import user from './user/reducers'
import mission_explorer from './mission_explorer/reducers'
import skill_explorer from './skill_explorer/reducers'



export default combineReducers({
  user,
  mission_explorer,
  skill_explorer
});
