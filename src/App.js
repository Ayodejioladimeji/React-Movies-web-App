import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home'
import Movies from './components/Movies/Movie'
import Crypto from './components/Crypto/Crypto'
import Nav from './components/Nav/Nav'
import './App.css';

function App() {
  return (
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/movies" exact component={Movies}/>
          <Route path="/crypto" exact component={Crypto}/>
        </Switch>
      </Router>
  );
}

export default App;
