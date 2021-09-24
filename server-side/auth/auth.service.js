const jwt = require("jsonwebtoken");
const config = require("./auth.config");
const bcrypt = require("bcrypt");
const userService = require("../user/user.service");
const { isEmail, isAlphanumeric, isLength } = require("validator");
const { logger } = require("../../utils/logger");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const checkDuplicateUsername = async (req, res, next) => {
  const { username } = req.body;

  try {
    const user = await userService.getUserIdByUsername(username);
    if (user) {
      res.status(403).send("Failed : Username is already use !");
      return;
    }
  } catch (error) {
    logger.error(`error ${error}`);
    res.status(500).send(error);
  }

  next();
};

const checkDuplicateEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await userService.getUserIdByEmail(email);

    if (user) {
      res.status(403).send("Failed! Email is already in use!");
      return;
    }
  } catch (error) {
    logger.error(`error ${error}`);
    res.status(500).send(error);
  }

  next();
};

const validatePassword = (inputPassword, userPassword) => {
  return bcrypt.compareSync(inputPassword, userPassword);
};

const generateJwtToken = (payload) => {
  const oneDayInSecond = 3600 * 60 * 24;
  return jwt.sign(payload, config.secret, {
    expiresIn: oneDayInSecond,
  });
};

const validateAuthInput = (req, res, next) => {
  const { username, email } = req.body;

  if (email && !isEmail(email)) {
    res.status(403).send("Email is not valid !");
  }

  if (username && !isAlphanumeric(username)) {
    res.status(403).send("username can only contain letters and numbers");
  }

  if (username && !isLength(username, { min: 3, max: 20 })) {
    res.status(403).send("username must be between 3 and 20 charaters");
  }

  next();
};

const authService = {
  generateJwtToken,
  validateAuthInput,
  verifyToken,
  checkDuplicateEmail,
  checkDuplicateUsername,
  validatePassword,
};

module.exports = authService;
