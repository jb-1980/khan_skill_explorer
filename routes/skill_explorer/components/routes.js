module.exports = {
  path:':skill_name',
  getComponent(nextState, callback){
    require.ensure([], (require) => {
      callback(null,
        require('./SkillView').default
      )
    })
  }
}
