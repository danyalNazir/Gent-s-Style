const express = require("express");
const router = express.Router();
const {
  postRegister,
  postLogin,
  getLogout,
} = require("../controllers/index"); /*using object De-structuring syntax
so we can get the method directly instead od getting a object*/
const { asyncErrorHandler } = require("../middleware/index");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Gent's Style - Home" });
});

/* GET /register        => for getting register page*/
router.get("/register", (req, res, next) => {
  res.send("GET /register");
});

/* POST /register        => for create/new  registeration*/
router.post("/register", asyncErrorHandler(postRegister));

/* GET /login       => for getting login page*/
router.get("/login", (req, res, next) => {
  res.send("GET /login");
});

/* POST /login       => for creating login */
router.post("/login", postLogin);

/* GET /logout      => for loging out */
router.get("/logout", getLogout);

/* GET /profile       => for getting profile page*/
router.get("/profile", (req, res, next) => {
  res.send("GET /profile");
});

/* PUT /profile       => for updating profile */
router.put("/profile/:user_id", (req, res, next) => {
  res.send("PUT /profile/:user_id");
});

/* GET /forgot       => for getting forgot password page*/
router.get("/forgot", (req, res, next) => {
  res.send("GET /forgot");
});

/* PUT /forgot       => for updating password */
router.put("/forgot", (req, res, next) => {
  res.send("PUT /forgot");
});

/* GET /reset/:token       => for getting reset password page*/
router.get("/reset/:token", (req, res, next) => {
  res.send("GET /reset/:token");
});

/* PUT /reset/:token       => for updating reset password */
router.put("/reset/:token", (req, res, next) => {
  res.send("PUT /reset/:tokeen");
});

module.exports = router;
