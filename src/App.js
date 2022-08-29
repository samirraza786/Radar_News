import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'



class App extends Component {
  name = "Vaibhav";
  render() {
    return (
      <>

        {/* <h1>hello world, hello {this.name}</h1> */}
        <Navbar />

        <News />

      </>
    )
  }
}


export default App;
