import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'




class App extends Component {
  render() {
    return (
      <>

        <Navbar />

        <News pageSize = {6} country = "in" category = "sports"  />

      </>
    )
  }
}


export default App;
