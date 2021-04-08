import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from '@material-ui/icons/Lock';

import PasswordField from "./components/PasswordField";

const paperStyle = { width: "33vw", height: "50vh", maxWidth: 450 };
const inputStyle = { width: "100%", marginLeft: "0.5rem" };

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
`;

const StyledForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputControl = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0.5rem;
  width: 80%;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 3rem;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleValidation = (event) => {
    const errors = {};
    event.preventDefault();
    let formIsValid = true;

    if (!isEmail(email)) {
      formIsValid = false;
      Object.assign(errors, { email: "email adress not valid" });
    }

    if (isEmpty(password)) {
      formIsValid = false;
      Object.assign(errors, { password: "password is not valid" });
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <Container>
      <Frame>
        <Label>
          Pas encore membre ? <Link to="/signup">Rejoins-nous !</Link>
        </Label>
        <Paper style={paperStyle} elevation={3}>
          <StyledForm
            method=""
            action=""
            id="login-form"
            onSubmit={handleValidation}
          >
            <Title>Connexion !</Title>
            <InputControl>
              <AlternateEmailIcon />
            <TextField
              style={inputStyle}
              id="id"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors["email"])}
              helperText={errors["email"]}
            />
            </InputControl>
            <InputControl>
            <LockIcon />
            <PasswordField
              style={inputStyle}
              id="password"
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(errors["password"])}
              helperText={errors["password"]}
            />
            </InputControl>
            <InputControl>
            <Button
              type="submit"
              style={{ ...inputStyle, marginTop: "3rem" }}
              variant="contained"
            >
              Connexion
            </Button>
            </InputControl>
          </StyledForm>
        </Paper>
      </Frame>
    </Container>
  );
};

export default Login;
