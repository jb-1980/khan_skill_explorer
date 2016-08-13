// ./modules/routes.js
module.exports = {
  path:'/',
  getComponent(nextState, callback){
    require.ensure([], (require) => {
      callback(null,
        require('./App').default
      )
    })
  },

  getChildRoutes(partialNextState, callback) {
    require.ensure([], (require) => {
      callback(null, [
        require('./skill_explorer/routes'),
        require('./mission_explorer/routes')
      ])
    })
  }
}
