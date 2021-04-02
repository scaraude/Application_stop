/* eslint-disable no-undef */
/**
 * GET /
 * Home page.
 */
exports.getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
};
