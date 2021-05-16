const userService = require("./user.service");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    await userService.deleteUserByEmail(email);
    res.status(200).send("User account deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};
