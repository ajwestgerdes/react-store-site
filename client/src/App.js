//Main app where all the components come together to form the web application

import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import { Container } from 'reactstrap';
import Logo from './components/Logo'
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Logo />
          <Container>
            
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
