import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const promise = (store) => {
  const next = store.dispatch

  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(next)
    }
    return next(action)
  }
}

export default (history, initialState = {}) => {
  const middlewares = [thunk, apiMiddleware, routerMiddleware(history)]

  const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ // eslint-disable-line
    }) : compose

  const store = createStore(
    rootReducer,
    initialState,
    // composeEnhancers(applyMiddleware(...middlewares)), // DEV
    compose(applyMiddleware(...middlewares)),
  )

  store.dispatch = promise(store)

  return store
}
