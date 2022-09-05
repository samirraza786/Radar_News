import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// https://www.npmjs.com/package/react-top-loading-bar




class App extends Component {

  state = {
    progress: 0
  }

  // make this as arrow function
  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />

          <LoadingBar
            color='#f11946' height={3} transitionTime = {300} 
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />

          <Routes>
            {/* must provide key in News bec in map there must be unique key */}
            <Route path="/" element={<News setProgress={this.setProgress}  key="general" pageSize={9} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress}  key="business" pageSize={9} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={9} country="in" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={this.setProgress}  key="general" pageSize={9} country="in" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress}  key="health" pageSize={9} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress}  key="science" pageSize={9} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={9} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress}  key="technology" pageSize={9} country="in" category="technology" />} />
          </Routes>
        </Router>


      </>
    )
  }
}


export default App;



