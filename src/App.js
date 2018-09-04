import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';



import Footer from './containers/footer/Footer'
import Main from './containers/main/Main'
import Navigation from './components/header/navigation';




class App extends Component {
  render() {
    return (
      <div className="App">


        <Navigation  />
        <Main />
        <Footer />
      </div>
    
    );
  }
}

export default App;
