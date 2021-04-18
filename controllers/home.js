/* eslint-disable no-undef */
const path = require('path');

/**
 * GET /
 * Home page.
 */
exports.getHome = (req, res) => {
  console.log('get home')
  res.sendFile(path.join(__dirname, "public", "index.html"));
};
