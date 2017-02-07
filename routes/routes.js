// ./modules/routes.js
module.exports = {
  path:'/',
  component: require('./App').default,
  childRoutes: [
    require('./skill_explorer/routes'),
    require('./mission_explorer/routes')
  ]
}
