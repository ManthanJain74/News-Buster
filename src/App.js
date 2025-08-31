import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import{
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom";

export default class App extends Component {
  ap=process.env.REACT_APP_API_KEY;
  render() {
    return (
      
      <div>
        <Router>
        <Navbar/>
        <Routes>
           <Route path="/" element={<News key="ge" pageSize={8} apikey={this.ap} country="us" category="general" />} />
           <Route exact path="/home" element={<News key="genral" pageSize={8} apikey={this.ap} country="us" category="general" />} />
            <Route exact path="/business"  element={<News key="business" pageSize={8} apikey={this.ap} country="us" category="business" />} />
            <Route exact path="/entertainment"  element={<News key="en" pageSize={8} apikey={this.ap} country="us" category="entertainment" />} />
            <Route exact path="/general"  element={<News key="gen" pageSize={8} apikey={this.ap} country="us" category="general" />} />
            <Route exact path="/science"  element={<News key="sci"  pageSize={8} apikey={this.ap} country="us" category="science" />} />
            <Route exact path="/sports"  element={<News key="spo" pageSize={8} apikey={this.ap} country="us" category="sports" />} />
            <Route exact path="/technology"  element={<News  key="tec" pageSize={8} apikey={this.ap} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
      
    )
  }
}

