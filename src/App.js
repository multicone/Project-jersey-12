import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Preview from './screens/Preview'
import SignIn from './screens/SignIn'
import CreateAccount from './screens/CreateAccount'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/preview' component={Preview} exact />
          <Route path='/sign-in' component={SignIn} exact />
          <Route path='/create-account' component={CreateAccount} exact />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
