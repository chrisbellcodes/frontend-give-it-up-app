import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Signup from './components/Signup'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import UserProfile from './components/UserProfile'
import ViceContainer from './containers/ViceContainer'

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/profile" component={UserProfile}/>
          <Route path="/vices" component={ViceContainer}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
