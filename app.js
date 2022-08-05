const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const session = require("express-session");
const User = require("./models/user");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//require routes
const indexRouter = require("./routes/index");
const postsRouter = require("./routes/posts");
const reviewsRouter = require("./routes/reviews");

const app = express();

//Connect to DataBase
mongoose
  .connect("mongodb://localhost/Gents-Style")
  .then(() => console.log("Connected to the DataBase....."))
  .catch((err) => console.log("SORRY! Couldn't connect to the DataBase ", err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // extended: true will return type instead of string
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method")); // for override the form method
//configure Passport and Session(always comes before mounting the routes)
/*Configure Session (always before configuring Passport) */
app.use(
  session({
    secret: "fuck you dude!",
    resave: false,
    saveUninitialized: true,
  })
);
/*Configure Passport */
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Mount routes
app.use("/", indexRouter);
app.use("/posts", postsRouter);
app.use("/posts/:id/reviews", reviewsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
