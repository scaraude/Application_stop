import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isStrongPassword from "validator/lib/isStrongPassword";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from "@material-ui/icons/Lock";

import PasswordField from "./PasswordField";

const inputStyle = { width: "100%", marginLeft: "0.5rem" };

const StyledForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const InputControl = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 2.5rem;
`;

const FormGenerator = ({
  title = "",
  buttonLabel = "Submit",
  hasUsername = false,
  hasEmail = false,
  hasPassword = false,
  method,
  action,
  helperTextHided,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [focused, setFocused] = useState("");
  const [errors, setErrors] = useState({});

  const formRef = useRef(null);

  const handleValidation = (event) => {
    const errors = {};
    event.preventDefault();
    let formIsValid = true;

    if (hasUsername) {
      if (!isAlphanumeric(username)) {
        formIsValid = false;
        Object.assign(errors, {
          username: "username can only contain letters and numbers",
        });
      }

      if (!isLength(username, { min: 3, max: 20 })) {
        formIsValid = false;
        Object.assign(errors, {
          username: "username must be between 3 and 20 charaters",
        });
      }
    }

    if (hasEmail) {
      if (!isEmail(email)) {
        formIsValid = false;
        Object.assign(errors, { email: "email adress not valid" });
      }
    }

    if (hasPassword) {
      if (!isStrongPassword(password, { minLowercase: 0, minSymbols: 0 })) {
        formIsValid = false;
        Object.assign(errors, {
          password: "password must have 8 characters, 1 uppercase, 1 number",
        });
      }
    }

    console.log(`formRef`, formRef);

    setErrors(errors);
    if (formIsValid) {
      formRef.current.submit();
    }

    return formIsValid;
  };

  const handleUsernameChange = (event) => {
    const usernameInput = event.target.value;
    if (usernameInput.length > 20) {
      setErrors({
        ...errors,
        username: "username must be 20 charaters maximum",
      });
    } else {
      setErrors({});
      setUsername(usernameInput);
    }
  };

  return (
    <StyledForm
      autocomplete="off"
      ref={formRef}
      method={method}
      action={action}
      id="login-form"
      onSubmit={handleValidation}
    >
      {title && <Title>{title}</Title>}
      {hasUsername && (
        <InputControl>
          <PersonIcon />
          <TextField
            style={inputStyle}
            id="username"
            name="username"
            label="Username, name, secret identity..."
            value={username}
            onChange={handleUsernameChange}
            onFocus={() => setFocused("username")}
            error={Boolean(errors["username"])}
            helperText={
              errors["username"] ||
              (!helperTextHided && focused === "username"
                ? "3 to 20 charaters"
                : " ")
            }
          />
        </InputControl>
      )}
      {hasEmail && (
        <InputControl>
          <AlternateEmailIcon />
          <TextField
            style={inputStyle}
            id="email"
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused("email")}
            error={Boolean(errors["email"])}
            helperText={errors["email"] || " "}
          />
        </InputControl>
      )}
      {hasPassword && (
        <InputControl>
          <LockIcon />
          <PasswordField
            style={inputStyle}
            id="password"
            name="password"
            label="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocused("password")}
            error={Boolean(errors["password"])}
            helperText={
              errors["password"] ||
              (!helperTextHided && focused === "password"
                ? "At least 8 characters, 1 uppercase, 1 number"
                : " ")
            }
          />
        </InputControl>
      )}
      <InputControl>
        <Button
          type="submit"
          style={{ ...inputStyle, marginTop: "2rem" }}
          variant="contained"
        >
          {buttonLabel}
        </Button>
      </InputControl>
    </StyledForm>
  );
};

FormGenerator.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  hasUsername: PropTypes.bool,
  hasEmail: PropTypes.bool,
  hasPassword: PropTypes.bool,
  method: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  helperTextHided: PropTypes.bool,
};

export default FormGenerator;
