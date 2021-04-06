/* eslint-disable no-undef */
/**
 * GET /
 * Home page.
 */
exports.getHome = (req, res) => {
  res.sendFile("index.html");
};
