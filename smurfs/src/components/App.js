import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
// import Login from './Login';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Dashboard} />
      {/* <Route exact path='/login' component={Login} /> */}
    </div>
  );
}

export default App;
