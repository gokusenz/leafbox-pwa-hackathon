import React from 'react'
import { Provider } from 'react-redux'

import routes from './routes'
import configureStore from './store'

class Root extends React.PureComponent {
  render() {
    const { history, initialState } = this.props
    const store = configureStore(history, initialState)

    return (
      <Provider store={store} key="provider">
        {routes(store, history)}
      </Provider>
    )
  }
}

Root.propTypes = {
  history: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  initialState: React.PropTypes.objectOf(React.PropTypes.any),
}

Root.defaultProps = {
  initialState: {},
}

export default Root
