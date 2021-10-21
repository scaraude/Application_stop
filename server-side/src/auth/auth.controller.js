const userService = require("../user/user.service");
const authService = require("./auth.service");

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  await userService.createUser(username, email, password);
  res.status(201).send("User successfully created");
};

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  const user = await userService.getUserIdByUsername(username);
  if (!user) {
    return res.status(404).send("User Not found.");
  }

  const isPasswordValide = authService.validatePassword(
    password,
    user.password
  );

  if (!isPasswordValide) {
    return res.status(401).send("Invalid Password!");
  }

  const rolesNamesRelatedToUser = user.roles.map((role) =>
    role.name.toUpperCase()
  );

  const token = authService.generateJwtToken({
    id: user._id,
    roles: rolesNamesRelatedToUser,
  });

  const authorities = [];

  for (let i = 0; i < user.roles.length; i++) {
    authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
  }
  res.status(200).send({
    id: user._id,
    username: user.username,
    email: user.email,
    roles: authorities,
    accessToken: token,
  });
};
