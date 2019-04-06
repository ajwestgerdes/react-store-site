import React, { Component } from 'react';

//components
import HeaderNav from './components/HeaderNav'
import Logo from './components/Logo'
import Info from './components/Info';
import Contact from './components/Contact';

//styling
import './assets/css/index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Logo />
        <Info />
        <Contact />
      </div>
    );
  }
}

export default App;
