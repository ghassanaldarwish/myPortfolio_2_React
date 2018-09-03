import React, { Component } from 'react';

import './App.css';

import Header from './containers/header/Header'
import Footer from './containers/footer/Footer'
import Main from './containers/main/Main'




class App extends Component {
  render() {
    return (
      <div className="App">


        <Header />
        <Main />
        <Footer />
      </div>
    
    );
  }
}

export default App;
