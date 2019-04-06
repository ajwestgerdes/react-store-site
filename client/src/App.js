import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import Home from './components/Home'
import Logo from './components/Logo'

//styling
import './assets/css/index.css'

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Logo} />
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
