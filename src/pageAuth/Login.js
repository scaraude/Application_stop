import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";

import FormGenerator from "./components/FormGenerator";

const paperStyle = { width: "33vw", height: "50vh", maxWidth: 450, padding: "3rem 0rem" };

const Container = styled.div`
position: absolute;
top:0;
left:0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  padding: 0.5rem;
  color: #666666;
  align-self: flex-end;
`;

const Login = () => {
  return (
    <Container>
      <Frame>
        <Label>
          Pas encore membre ? <Link to="/signup">Rejoins-nous !</Link>
        </Label>
        <Paper style={paperStyle} elevation={3}>
          <FormGenerator
            title="Connexion"
            buttonLabel="Connexion"
            method="post"
            action="/api/auth/login"
            hasEmail
            hasPassword
            helperTextHided
          />
        </Paper>
      </Frame>
    </Container>
  );
};

export default Login;