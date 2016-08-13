import SkillExplorer from './containers/SkillExplorer'
import SkillView from './components/SkillView'

module.exports = {
  path:'skill_explorer',
  childRoutes: [
    {
      path: ':skill_name',
      component: SkillView
    }
  ],
  getComponent(nextState, callback){
    require.ensure([], (require) => {
      callback(null,
        require('./containers/SkillExplorer').default
      )
    })
  }
}
