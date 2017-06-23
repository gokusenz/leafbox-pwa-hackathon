import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'

import Root from './Root'

const initialState = window.__INITIAL_STATE__ || {}

render(
  <Root
    history={browserHistory}
    initialState={initialState}
  />
  , document.getElementById('react-root'),
)
