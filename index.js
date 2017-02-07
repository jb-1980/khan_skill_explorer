import React from 'react'
import {Provider} from 'react-redux'

import {Router, browserHistory} from 'react-router'
import { render } from 'react-dom'

import routes from './routes/routes'

import configureStore from './routes/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
  , document.getElementById('app'))
