const express = require("express");
const router = express.Router();

//========================HTTP GET=========================

/* GET index /posts. */
router.get("/", (req, res, next) => {
  res.send("GET /posts");
});

/* GET index /posts/new. */ // "/new" will always comes before "show" i.e. "posts/:id"
router.get("/new", (req, res, next) => {
  res.send("GET /posts/new");
});

/* GET index /posts/show. */
router.get("/:id", (req, res, next) => {
  res.send("GET /posts/:id");
});

/* GET index /posts/:id/edit. */
router.get("/:id/edit", (req, res, next) => {
  res.send("GET /posts/:id/edit");
});

//========================HTTP POST=========================
router.post("/", (req, res, next) => {
  res.send("POST /posts");
});

//========================HTTP PUT=========================
router.put("/:id", (req, res, next) => {
  res.send("PUT /posts/:id");
});

//========================HTTP DELETE=========================
router.delete("/:id", (req, res, next) => {
  res.send("DELETE /posts/:id");
});

module.exports = router;
