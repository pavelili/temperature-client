import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LocationDetail from '../containers/LocationDetail';
import Home from '../pages/Home';

export default function App() {
  return (
    <Router>
      <Route path="/temps/:id" component={LocationDetail}/>
      <Route exact path="/" component={Home}/>
    </Router>
  );
}
  
