import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Logo from "./Logo.png";
import { useCurrentUser } from "../pageAuth/hooks/useCurrentUser";

const NAVBAR_HEIGHT = 54;

const NavButtons = styled.div`
  padding-right: 2rem;
`;

const StyledNavbar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImg = styled.img`
  max-height: ${NAVBAR_HEIGHT}px;
  width: auto;
`;

const NavBar = ({disabled = true}) => {

  if(disabled){
    return null;
  }
  const currentUser = useCurrentUser();
  const buttonStyle = { color: "brown" };
  return (
    <AppBar style={{ background: "white", maxHeight: NAVBAR_HEIGHT }}>
      <Toolbar
        style={{ maxHeight: NAVBAR_HEIGHT, minHeight: 48 }}
        disableGutters
      >
        <StyledNavbar>
          <StyledImg src={Logo} alt="Hitch Hick logo" />
          <NavButtons>
            <Button style={buttonStyle}>Itinéraire</Button>
            <Link to="/">
              <Button style={buttonStyle}>Plan</Button>
            </Link>
            <Button style={buttonStyle}>Blog</Button>
            {currentUser ? (
              <Link to="/profile">
                <Button style={buttonStyle}>{currentUser.username}</Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button style={buttonStyle}>Login</Button>
              </Link>
            )}
          </NavButtons>
        </StyledNavbar>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;

NavBar.propTypes = {
  disabled : PropTypes.bool,
}