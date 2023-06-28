import React from "react";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pageAuth/Login";
import SignUp from "./pageAuth/SignUp";
import Map from "./pageMap/Map";
import Profile from "./pageUser/Profile";

const App = () =>
	<Router>
		<NavBar disabled />
		<Switch>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/signup">
				<SignUp />
			</Route>
			<Route path="/profile">
				<Profile />
			</Route>
			<Route path="/">
				<Map />
			</Route>
			<Redirect to='/' />
		</Switch>
	</Router>
  ;

export default App;
