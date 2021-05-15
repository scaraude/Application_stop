import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isStrongPassword from "validator/lib/isStrongPassword";

export const useValidator = () => {
  const findValidationErrors = ({ username, email, password }) => {
    const errors = {};

    console.log(`username`, username);
    if (username) {
      if (!isAlphanumeric(username)) {
        Object.assign(errors, {
          username: "username can only contain letters and numbers",
        });
      }

      if (!isLength(username, { min: 3, max: 20 })) {
        Object.assign(errors, {
          username: "username must be between 3 and 20 charaters",
        });
      }
    } else {
      Object.assign(errors, {
        username: "Username is required",
      });
    }

    if (email) {
      if (!isEmail(email)) {
        Object.assign(errors, { email: "email adress is not valid" });
      }
    } else {
      Object.assign(errors, {
        email: "Email is required",
      });
    }

    if (password) {
      if (!isStrongPassword(password, { minLowercase: 0, minSymbols: 0 })) {
        Object.assign(errors, {
          password: "password must have 8 characters, 1 uppercase, 1 number",
        });
      }
    } else {
      Object.assign(errors, {
        password: "Password is required",
      });
    }
    console.log(`validationErrors`, errors);
    return errors;
  };

  return { findValidationErrors };
};
