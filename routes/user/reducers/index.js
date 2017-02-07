import {AUTHENTICATE_USER} from '../actions'

function authenticate(state = {
  authenticated: false,
  oauth_token: '',
  oauth_token_secret: '',
  khan_data: {}
}, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return Object.assign({}, state, {
        authenticated: true,
        oauth_token: action.oauth_token,
        oauth_token_secret: action.oauth_token_secret,
        khan_data: action.khan_data
      })

    default:
      return state
  }
}

export default authenticate
