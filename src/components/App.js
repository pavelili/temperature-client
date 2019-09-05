import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LocationDetail from '../containers/LocationDetail';

export default function App() {
  return (
    <Router>
      <Route path="/temps/:id" component={LocationDetail}/>
    </Router>
  );
}
  
