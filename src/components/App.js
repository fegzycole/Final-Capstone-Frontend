import React from 'react';
import LandingPage from '../containers/LandingPage';
import { Route, Switch } from 'react-router-dom';
import '../scss/index.scss';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
