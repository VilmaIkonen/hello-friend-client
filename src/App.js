import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Content from './Components/Content/Content'


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/'>
            <Landing/>
          </Route>
          <Route path='/posts'>
            <Content/>
          </Route>
          <Content/>
        </Switch>
      </div> 
    </Router>
  );
};

export default App;