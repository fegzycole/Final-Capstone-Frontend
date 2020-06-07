import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../containers/LandingPage';
import Signup from '../containers/Signup';
import '../scss/index.scss';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Signup" component={Signup} />
    </Switch>
  </div>
);

export default App;
