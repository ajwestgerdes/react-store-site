//Main app where all the components come together to form the web application

import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';

import Logo from './components/Logo'
import AppNavbar from './components/AppNavbar';
import About from './components/About';
import Brands from './components/Brands';
import Contact from './components/Contact'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Logo />
          <About />
          <Brands />
          <Contact />
          <Container>

          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
