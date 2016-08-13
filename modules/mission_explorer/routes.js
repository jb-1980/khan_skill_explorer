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
