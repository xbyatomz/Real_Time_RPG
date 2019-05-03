import React from 'react'
import {Route, NavLink, BrowserRouter as Router, Switch} from 'react-router-dom'
import {PrivateRoute} from './components/privateRoute'
import Home from './views/home'
import Create from './views/createUser'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/create" component={Create} />
        </Switch>
      </Router>
    );
  }
}

export default App;
