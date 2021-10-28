const withAuth = (req, res, next) => {
  if (!! req.session.loggedIn){
  return res.redirect('/login')}
  else {
    next()
  }
  // TODO: If the user is not logged in, redirect the user to the login page
  // TODO: If the user is logged in, allow them to view the paintings
};

module.exports = withAuth;
