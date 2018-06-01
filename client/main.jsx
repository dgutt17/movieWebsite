import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {HashRouter, Route} from 'react-router-dom'

import store from './store'
import Root from './components/Root'

render (
  <Provider store={store} >
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider >,
  document.getElementById('main')
)