const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Surf Shop - Home" });
});

/* GET /register        => for getting register page*/
router.get("/register", (req, res, next) => {
  res.send("GET /register");
});

/* POST /register        => for create/new  registeration*/
router.post("/register", (req, res, next) => {
  res.send("POST /register");
});

/* GET /login       => for getting login page*/
router.get("/login", (req, res, next) => {
  res.send("GET /login");
});

/* POST /login       => for creating login */
router.post("/login", (req, res, next) => {
  res.send("POST /login");
});

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
