const express = require("express");
const router = express.Router();
const { asyncErrorHandler } = require("../middleware/index");
const {
  postIndex,
  postNew,
  postCreate,
  postShow,
  postEdit,
  postUpdate,
  postDelete,
} = require("../controllers/posts");

//========================HTTP GET=========================

/* GET posts Index /posts */
router.get("/", asyncErrorHandler(postIndex));

/* GET posts new  /posts/new    for rendering the views/posts/new.ejs i.e. form page*/
// "/new" will always comes before "show" i.e. "posts/:id"
router.get("/new", postNew);

//========================HTTP POST=========================
router.post("/", asyncErrorHandler(postCreate));

/* GET posts show /posts/show */
router.get("/:id", asyncErrorHandler(postShow));

/* GET posts edit /posts/:id/edit */
router.get("/:id/edit", asyncErrorHandler(postEdit));

//========================HTTP PUT=========================
router.put("/:id", asyncErrorHandler(postUpdate));

//========================HTTP DELETE=========================
router.delete("/:id", asyncErrorHandler(postDelete));

module.exports = router;
