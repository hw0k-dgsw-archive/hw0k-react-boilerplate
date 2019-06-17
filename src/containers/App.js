import React from 'react';
import CounterContainer from './CounterContainer';

import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={CounterContainer} />
      <Route path="/aa" component={() => (<div>Hello world!</div>)} />
    </Switch>
  );
};

export default App;
