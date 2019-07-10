import React, { Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GitHubState from './context/github/GitHubState';
import AlertState from './context/alert/AlertState'


import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Details from './components/users/Details';
import NotFound from './components/pages/NotFound'
import './App.css';

const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
              
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About} />
                <Route exact path="/details/:username" component={Details} />
                <Route component={NotFound}/>

              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
};

export default App;
