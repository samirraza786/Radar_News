import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'



class App extends Component {
  render() {
    return (
      <>

        <Navbar />

        <News />

      </>
    )
  }
}


export default App;
