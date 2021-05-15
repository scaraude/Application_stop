import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordField from "./components/PasswordField";
import { useValidator } from "./hooks/useFieldsValidator";
import { useAuthServices } from "./hooks/useAuthServices";

import { inputStyle, paperStyle } from "./styles/style";
import {
  Container,
  Frame,
  InputControl,
  Label,
  StyledForm,
  Title,
} from "./styles/styledComponents";

const SignUp = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [errors, setErrors] = useState({});
  const [registrationState, setRegistrationState] = useState(null);

  const handleSignUp = async (event) => {
    const { findValidationErrors } = useValidator();
    const { register } = useAuthServices();
    event.preventDefault();

    setErrors({});
    setIsLoading(true);
    const validationErrors = findValidationErrors({
      username,
      email,
      password,
    });

    console.log(`Object.keys(errors).length`, Object.keys(errors).length);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await register(username, email, password);
        const responseBody = await response.json();
        setRegistrationState({
          message: responseBody.message,
          successful: true,
        });
      } catch (error) {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setRegistrationState({
          successful: false,
          message: resMessage,
        });
        setIsLoading(false);
      }
    }
    setIsLoading(false);
    setErrors(validationErrors);
    console.log(`registrationState`, registrationState);
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
            id="login-form"
            onSubmit={handleSignUp}
          >
            <Title>Rejoins-nous !</Title>
            <InputControl>
              <PersonIcon />
              <TextField
                style={inputStyle}
                id="username"
                name="username"
                label="Username, name, secret identity..."
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                error={Boolean(errors["username"])}
                helperText={errors["username"] || " "}
              />
            </InputControl>
            <InputControl>
              <AlternateEmailIcon />
              <TextField
                style={inputStyle}
                id="email"
                name="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={Boolean(errors["email"])}
                helperText={errors["email"] || " "}
              />
            </InputControl>
            <InputControl>
              <LockIcon />
              <PasswordField
                style={inputStyle}
                id="password"
                name="password"
                label="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                error={Boolean(errors["password"])}
                helperText={errors["password"]}
              />
            </InputControl>
            <InputControl>
              <Button
                type="submit"
                style={{ ...inputStyle, marginTop: "2rem" }}
                variant="contained"
              >
                {isLoading ? <CircularProgress /> : "Inscription !"}
              </Button>
            </InputControl>
          </StyledForm>
        </Paper>
      </Frame>
    </Container>
  );
};

export default SignUp;
