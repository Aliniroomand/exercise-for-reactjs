import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Landing from './components/Landing';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
      
        <Navbar />
        <Switch>
              <Route path="/AboutUs" component={AboutUs}/>
              <Route path="/Products" component={Products} />
              <Route path="/" component={Landing}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;