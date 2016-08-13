//import fetch from 'isomorphic-fetch'

import {CONSUMER_KEY, CONSUMER_SECRET} from '../secrets'

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER'


var khan = require('khan')(CONSUMER_KEY,CONSUMER_SECRET)

// TODO make this khan module work. I am currently getting a
// No 'Access-Control-Allow-Origin' issue, so right now this is a quick
// hack to just simulate authentication. Authentication is required to view
// user mission details.
export function authenticateUser(){
  return {
    type: AUTHENTICATE_USER,
  }
  // return function(dispatch){
  //   return khan.requestToken('http://localhost:3000/')
  //   .then( response => {
  //     console.log(response)
  //   })
  // }
}
