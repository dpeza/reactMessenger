import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import LogInPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import RegisterPage from './containers/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path = "/" exact component = {HomePage}/>
        <Route path = "/login" component= {LogInPage}/>
        <Route path = "/signup" component={RegisterPage}/>

      </Router>
    </div>
  );
}

export default App;
