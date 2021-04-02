/* eslint-disable no-undef */
/**
 * GET /
 * Home page.
 */
exports.getHome = (req, res) => {
  res.render('pages/home', {
    title: 'Home'
  });
};
