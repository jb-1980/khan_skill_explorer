import MissionExplorer from './containers/MissionExplorer'
import MissionDisplay from './containers/MissionDisplay'

module.exports = {
  path:'mission_explorer',
  component: MissionExplorer,
  childRoutes: [
    {
      path: ':mission_name',
      component: MissionDisplay
    }
  ]
}

// import React from 'react'
// import { Route, IndexRoute } from 'react-router'
//
// module.exports = (
//   <Route path="/mission_explorer" component={MissionExplorer}>
//     <Route path="/mission_explorer/:mission_name" component={MissionDisplay}/>
//   </Route>
// )
