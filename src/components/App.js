import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../containers/LandingPage';
import Signup from '../containers/Signup';
import Signin from '../containers/Signin';
import VespaList from '../containers/VespaList';
import '../scss/index.scss';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Signin" component={Signin} />
      <Route exact path="/VespaList" component={VespaList} />
    </Switch>
  </div>
);

export default App;
