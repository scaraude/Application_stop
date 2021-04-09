import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";

import FormGenerator from "./components/FormGenerator";

const paperStyle = { width: "33vw", height: "50vh", maxWidth: 450 };

const Container = styled.div`
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
`

const SignUp = () => {
  return (
    <Container>
      <Frame>
        <Label>
          Déjà membre ? <Link to="/login">Connecte-toi !</Link>
        </Label>
        <Paper style={paperStyle} elevation={3}>
          <FormGenerator
            title="Rejoins-nous !"
            buttonLabel="Inscription"
            hasPseudo
            hasEmail
            hasPassword
            method="post"
            action="/signup"
          />
        </Paper>
      </Frame>
    </Container>
  );
};

export default SignUp;
