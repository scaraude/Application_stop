import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isStrongPassword from "validator/lib/isStrongPassword";

export const useValidator = () => {
  const findvalidationErrors = ({ username, email, password }) => {
    const errors = {};

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
    }

    if (email) {
      if (!isEmail(email)) {
        Object.assign(errors, { email: "email adress is not valid" });
      }
    }

    if (password) {
      if (!isStrongPassword(password, { minLowercase: 0, minSymbols: 0 })) {
        Object.assign(errors, {
          password: "password must have 8 characters, 1 uppercase, 1 number",
        });
      }
    }
    console.log(`validationErrors`, errors);
    return errors;
  };

  return { findvalidationErrors };
};
