import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
