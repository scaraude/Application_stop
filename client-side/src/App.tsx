import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "./pageMap/Map";
import NavBar from "./NavBar/NavBar";
import Login from "./pageAuth/Login";
import SignUp from "./pageAuth/SignUp";
import Profile from "./pageUser/Profile";

const App = () =>
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Map />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  </Router>
  ;

export default App;
