import logo from './logo.svg';
import './App.css';
import LoadingBar from "react-top-loading-bar";

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
  constructor(){
    super();
    this.state={
      progress : 0
    }
  }
  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
  
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />
        <Routes>
           <Route path="/" element={<News setProgress={this.setProgress} key="ge" pageSize={8} apikey={this.ap} country="us" category="general" />} />
           <Route exact path="/home" element={<News setProgress={this.setProgress} key="genral" pageSize={8} apikey={this.ap} country="us" category="general" />} />
            <Route exact path="/business"  element={<News setProgress={this.setProgress} key="business" pageSize={8} apikey={this.ap} country="us" category="business" />} />
            <Route exact path="/entertainment"  element={<News setProgress={this.setProgress} key="en" pageSize={8} apikey={this.ap} country="us" category="entertainment" />} />
            <Route exact path="/general"  element={<News setProgress={this.setProgress} key="gen" pageSize={8} apikey={this.ap} country="us" category="general" />} />
            <Route exact path="/science"  element={<News setProgress={this.setProgress} key="sci"  pageSize={8} apikey={this.ap} country="us" category="science" />} />
            <Route exact path="/sports"  element={<News setProgress={this.setProgress} key="spo" pageSize={8} apikey={this.ap} country="us" category="sports" />} />
            <Route exact path="/technology"  element={<News setProgress={this.setProgress}  key="tec" pageSize={8} apikey={this.ap} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
      
    )
  }
}

