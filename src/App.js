import React, { Component } from 'react';
// import styles from "./App.module.css" 
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Search from './components/Search';
import Logos from './components/Logos';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner/>
        <Cards/>
        <Search/>
        <Logos/>
      </div>
    );
  }
}

export default App;