import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/users'
import About from './pages/about'
import elements from './pages/elements'
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/users" render={ () => { return (<Users username="Meenakshi" lastname="Khandelwal" />) } } />
      <Route path="/about" component={About} />
      <Route path="/user" component={Users} />
      <Route path="/element" component={elements}></Route>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
