const express = require("express");
const router = express.Router();
const multer = require("multer"); /*Multer is a node.js middleware for handling 
multipart/form-data, which is primarily used for uploading files into our application.  */
const upload = multer({
  dest: "uploads/",
}); /*files(images) will store in "uploads" 
temprarily before they upload on couldinary and store URL of images in DataBase */
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
/* here "images" is the input type and 4 is max number of images can be uploaded */
router.post("/", upload.array("images", 4), asyncErrorHandler(postCreate));

/* GET posts show /posts/show */
router.get("/:id", asyncErrorHandler(postShow));

/* GET posts edit /posts/:id/edit */
router.get("/:id/edit", asyncErrorHandler(postEdit));

//========================HTTP PUT=========================
router.put("/:id", upload.array("images", 4), asyncErrorHandler(postUpdate));

//========================HTTP DELETE=========================
router.delete("/:id", asyncErrorHandler(postDelete));

module.exports = router;
