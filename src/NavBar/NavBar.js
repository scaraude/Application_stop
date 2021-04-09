import React from "react";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Logo from "./Logo.png";

const Container = styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`;

const NavButtons = styled.div`
  padding-right: 2rem;
`;

const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = () => {
  const buttonStyle = {color: "brown" }
  return (
    <Container>
      <AppBar
        style={{ background: "white" }}
      >
        <Toolbar disableGutters>
          <StyledNavbar>
            <img src={Logo} alt="Hitch Hick logo" />
            <NavButtons>
              <Button style={buttonStyle}>Itinéraire</Button>
              <Button style={buttonStyle}>Plan</Button>
              <Button style={buttonStyle}>Blog</Button>
              <Button style={buttonStyle}>Login</Button>
            </NavButtons>
          </StyledNavbar>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default NavBar;
