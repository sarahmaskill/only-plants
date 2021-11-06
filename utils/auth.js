const withAuth = (req, res, next) => {
  console.log('Using Auth12131')
  console.log(req.originalUrl)
  console.log(req.session)
  console.log(!!req.session.logged_in)
  
  // If the user is not logged in, redirect the request to the login route
  if (!!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }

};

module.exports = withAuth;
