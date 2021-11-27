import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Map from "./pageMap/Map";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pageAuth/Login";
import SignUp from "./pageAuth/SignUp";
import Profile from "./pageUser/Profile";
import { Sidebar } from "./components/Sidebar/Sidebar";

const App = () =>
  <Router>
    <NavBar disabled />
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
      <Redirect to='/' />
    </Switch>
  </Router>
  ;

export default App;
