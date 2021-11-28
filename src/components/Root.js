import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'

// const Root = ({ store }) => (
//   <Provider store={store}>
//     <Router>
//       <Route path="/:filter?" component={App} />
//     </Router>
//   </Provider>
// )

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/:filter/:val" component={App} />
        <Route path="/:filter" component={App} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root