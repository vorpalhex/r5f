import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Equipment from './equipment.jsx'
import Menu from './menu.jsx'

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
  <Router history={browserHistory}>
    <Route path="/" component={Menu}>
      <Route path="/equipment" component={Equipment}/>
    </Route>
  </Router>
), document.getElementById('root'))
