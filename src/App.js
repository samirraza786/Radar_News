import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            {/* must provide key in News bec in map there must be unique key */}
            <Route path="/" element={<News key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={6} country="in" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route path="/general" element={<News key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/health" element={<News key="health" pageSize={6} country="in" category="health" />} />
            <Route path="/science" element={<News key="science" pageSize={6} country="in" category="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology" />} />
          </Routes>
        </Router>


      </>
    )
  }
}


export default App;
