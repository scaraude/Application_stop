import React from "react";
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Map from "./pageMap/Map";
import Login from './pageAuth/Login';
// import SignUp from './pageAuth/SignUp';

const LinkHolder = styled.div`
position: absolute;
  left: 1vw;
  z-index: 1000;
background-color: #cecece;
`

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Map />
         {/* || A VIRER SOON */}
        <LinkHolder>
          <Link to="/login">
            LOGIN
          </Link>
        </LinkHolder>
        {/* || */}
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {/* <Route path="/signup">
        <SignUp />
      </Route> */}
    </Switch>
  </Router>
);

export default App;
