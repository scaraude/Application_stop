const bcrypt = require("bcrypt");
const User = require("./user.model");
const Role = require("../role/role.model");

const createUser = async (username, email, password, roles) => {
  const user = new User({
    username,
    email,
    password: bcrypt.hashSync(password, 8),
  });

  const rolesNamesRelatedToUser = roles || ["user"];

  const rolesRelatedToUser = await Role.find({
    name: { $in: rolesNamesRelatedToUser },
  });

  user.roles = rolesRelatedToUser.map((role) => role._id);

  return await user.save();
};

const getUserIdByUsername = async (username) => {
  if (!username) {
    throw new Error("username is not defined");
  }

  return await User.findOne({ username }).populate("roles", "-__v");
};

const getUserIdByEmail = async (email) => {
  if (!email) {
    throw new Error("username is not defined");
  }

  return await User.findOne({ email }).populate("roles", "-__v");
};

const deleteUserByEmail = async (email) => {
  if (!email) {
    throw new Error("username is not defined");
  }

  return User.deleteOne({ email });
};

const userService = {
  createUser,
  getUserIdByUsername,
  getUserIdByEmail,
  deleteUserByEmail,
};

module.exports = userService;
