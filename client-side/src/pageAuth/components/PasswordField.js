import React, { useState } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const PasswordField = ({
  value: password,
  onChange: handleChange,
  onFocus: handleOnFocus,
  style = {},
  error = false,
  helperText = "",
  name = "password",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl error={error} style={style} onFocus={handleOnFocus}>
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id="password"
        name={name}
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange}
        aria-describedby="mail-helper-text"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText id="mail-helper-text">{helperText}</FormHelperText>
    </FormControl>
  );
};

PasswordField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  style: PropTypes.object,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  name: PropTypes.string,
};

export default PasswordField;