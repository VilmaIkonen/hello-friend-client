import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Content from './Components/Content/Content'


const App = () => {
  return (
    <Router>
      <Landing/>
      <Content/>
    </Router>
  );
};

export default App;