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

  pageSize = 9;
  apiKey = "c3c400ee051a4b249f6a3696e4a8358b";
  // make this as arrow function
  setProgress = (progress) => {
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
            color='#f11946' height={3} transitionTime={300}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />

          <Routes>
            {/* must provide key in News bec in map there must be unique key */}
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>


      </>
    )
  }
}


export default App;



