const express = require("express");
const router = express.Router({
  mergeParams: true,
}); /*configuration object, it will pull the "ID" of posts from /posts/:id/reviews  
so we'll have access to the posts*/

//========================HTTP GET=========================

/* GET reviews Index  /posts/:id/reviews */
router.get("/", (req, res, next) => {
  res.send("GET /posts/:id/reviews");
});

/* GET reviews new /posts/:id/reviews/new */
//since we don't want to make a review on a new page, instead we'll do that on the posts page
//thus we don't need it

//========================HTTP POST=========================
router.post("/", (req, res, next) => {
  res.send("POST /posts/:id/reviews");
});

/* GET reviews show /posts/:id/reviews/:review_id */
//since we don't want to show a review on a new page, instead we'll do that on the posts page
//thus we don't need it

/* GET reviews edit /posts/:id/reviews/:review_id/edit */
router.get("/:review_id/edit", (req, res, next) => {
  res.send("GET /posts/:id/reviews/:review_id/edit");
});

//========================HTTP PUT=========================
router.put("/:review_id", (req, res, next) => {
  res.send("PUT /posts/:id/reviews/:review_id");
});

//========================HTTP DELETE=========================
router.delete("/:review_id", (req, res, next) => {
  res.send("DELETE /posts/:id/reviews/:review_id");
});

module.exports = router;
