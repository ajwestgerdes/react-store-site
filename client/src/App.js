import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import Home from './components/Home'
import Signup from './components/Signup'

//styling
import './assets/css/index.css'

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
