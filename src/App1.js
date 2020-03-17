import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
     <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    )
  }
}
export default App
