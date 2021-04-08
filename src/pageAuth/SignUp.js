import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isStrongPassword from "validator/lib/isStrongPassword";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from '@material-ui/icons/Lock';


import PasswordField from "./components/PasswordField";

const paperStyle = { width: "33vw", height: "50vh", maxWidth: 450 };
const inputStyle = { width: "100%", marginLeft: "0.5rem" }; //{ margin: "0.5rem", width: "80%" };

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
  align-items: center;
  /* margin: 0.5rem; */
  width: 80%;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 3rem;
`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");

  const [focused, setFocused] = useState("");
  const [errors, setErrors] = useState({});

  const handleValidation = (event) => {
    const errors = {};
    event.preventDefault();
    let formIsValid = true;

    if (!isAlphanumeric(pseudo)) {
      formIsValid = false;
      Object.assign(errors, {
        pseudo: "pseudo can only contain letters and numbers",
      });
    }

    if (!isLength(pseudo, { min: 3, max: 20 })) {
      formIsValid = false;
      Object.assign(errors, {
        pseudo: "pseudo must be between 3 and 20 charaters",
      });
    }

    if (!isEmail(email)) {
      formIsValid = false;
      Object.assign(errors, { email: "email adress not valid" });
    }

    if (!isStrongPassword(password, { minLowercase: 0, minSymbols: 0 })) {
      formIsValid = false;
      Object.assign(errors, {
        password: "password must have 8 characters, 1 uppercase, 1 number",
      });
    }

    setErrors(errors);
    return formIsValid;
  };

  const handlePseudoChange = (event) => {
    const pseudoInput = event.target.value;
    if (pseudoInput.length > 20) {
      setErrors({ ...errors, pseudo: "pseudo must be 20 charaters maximum" });
    } else {
      setErrors({});
      setPseudo(pseudoInput);
    }
  };

  return (
    <Container>
      <Frame>
        <Label>
          Déjà membre ? <Link to="/login">Connecte-toi !</Link>
        </Label>
        <Paper style={paperStyle} elevation={3}>
          <StyledForm
            autocomplete="off"
            method=""
            action=""
            id="login-form"
            onSubmit={handleValidation}
          >
            <Title>Rejoins-nous !</Title>
            <InputControl>
              <PersonIcon />
              <TextField
                style={inputStyle}
                id="pseudo"
                label="Pseudo, name, secret identity..."
                value={pseudo}
                onChange={handlePseudoChange}
                onFocus={() => setFocused("pseudo")}
                error={Boolean(errors["pseudo"])}
                helperText={
                  errors["pseudo"] ||
                  (focused === "pseudo" ? "3 to 20 charaters" : " ")
                }
              />
            </InputControl>
            <InputControl>
              <AlternateEmailIcon />
              <TextField
                style={inputStyle}
                id="id"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused("email")}
                error={Boolean(errors["email"])}
                helperText={errors["email"] || " "}
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
                onFocus={() => setFocused("password")}
                error={Boolean(errors["password"])}
                helperText={
                  errors["password"] ||
                  (focused === "password" ?
                    "At least 8 characters, 1 uppercase, 1 number" : " ")
                }
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

export default SignUp;
