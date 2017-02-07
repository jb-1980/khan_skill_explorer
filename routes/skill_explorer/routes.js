module.exports = {
  path: 'skill_explorer',
  component: require('./containers/SkillExplorer').default,
  childRoutes: [
    {
      path: ':skill_name',
      component: require('./components/SkillView').default
    }
  ]
}

// import React from 'react'
// import { Route} from 'react-router'
//
// import SkillExplorer from './containers/SkillExplorer'
// import SkillView from './components/SkillView'
//
// export default (
//   <Route path="skill_explorer" component={SkillExplorer}>
//     <Route path=":skill_name" component={SkillView}/>
//   </Route>
// )
