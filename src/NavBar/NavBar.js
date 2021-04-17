import React from "react";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Logo from "./Logo.png";

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
  width:auto;
`;

const NavBar = () => {
  const buttonStyle = {color: "brown" }
  return (
      <AppBar
        style={{ background: "white", maxHeight: NAVBAR_HEIGHT }}
      >
        <Toolbar style={{ maxHeight: NAVBAR_HEIGHT, minHeight: 48 }} disableGutters>
          <StyledNavbar>
            <StyledImg src={Logo} alt="Hitch Hick logo" />
            <NavButtons>
              <Button style={buttonStyle}>Itinéraire</Button>
              <Button style={buttonStyle}>Plan</Button>
              <Button style={buttonStyle}>Blog</Button>
              <Button style={buttonStyle}>Login</Button>
            </NavButtons>
          </StyledNavbar>
        </Toolbar>
      </AppBar>
  );
};
export default NavBar;
