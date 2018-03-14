import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import logo from 'logo.svg'
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
        <Link to="/"> <img src={logo} style={{
              position:'fixed',
              left:'5rem',
              top:'1em',
              zIndex:'5'}}/>
        </Link>
      <nav style={{position:'fixed', zIndex:'4'}}>
        <Link to="/sales">Sales</Link>
        <Link to="/rentals">Rentals</Link>
        <Link to="/service">Service</Link>
        <Link to="/parts">Parts</Link>
        <Link>(123) 456-7890</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
