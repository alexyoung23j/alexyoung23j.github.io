import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "./components/Main"
import Test from "./components/Test"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
