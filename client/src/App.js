//Main app where all the components come together to form the web application

import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import FitList from './components/AppList';
import ItemModal from './components/AppModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <FitList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
