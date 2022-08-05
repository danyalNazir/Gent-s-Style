const User = require("../models/user");
const passport = require("passport");

//POST "/register"
async function postRegister(req, res, next) {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    image: req.body.image,
  });
  await User.register(user, req.body.password);
  res.redirect("/");
}
//POST "/login"
function postLogin(req, res, next) {
  //for authenticating the login info
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })(req, res, next); //higher order functions(Functional Programming) i.e. functions that
  //takes other functions as arguments.
  //Here we are invocking the passport.authentiation at the same time of defining it
}
//GET "/logout"
function getLogout(req, res, next) {
  req.logout((err) => {
    if (err) return next(err);
  }); //end the session
  res.redirect("/"); //redirect to home page
}

module.exports.postRegister = postRegister;
module.exports.postLogin = postLogin;
module.exports.getLogout = getLogout;
