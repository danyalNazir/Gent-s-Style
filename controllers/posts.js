const Post = require("../models/post");

//GET /posts
async function postIndex(req, res, next) {
  const posts = await Post.find();
  res.render("posts/index", { posts });
}

//GET /posts/new
function postNew(req, res, next) {
  res.render("posts/new");
}

//POST /posts
async function postCreate(req, res, send) {
  const post = await Post.create(req.body.post);
  // res.redirect(`/posts/${post.id}`);
  res.redirect("/posts");
}

//GET /post/:id
async function postShow(req, res, send) {
  const post = await Post.findById(req.params.id);
  res.render("posts/show", { post });
}

//GET /post/:id/edit
async function postEdit(req, res, send) {
  const post = await Post.findById(req.params.id);
  res.render("posts/edit", { post });
}

//PUT /post/:id
async function postUpdate(req, res, next) {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body.post, {
    new: true,
  });
  res.redirect(`/posts/${post.id}`);
}

//DELETE /post/:id
async function postDelete(req, res, next) {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect("/posts");
}

module.exports.postIndex = postIndex;
module.exports.postNew = postNew;
module.exports.postCreate = postCreate;
module.exports.postShow = postShow;
module.exports.postEdit = postEdit;
module.exports.postUpdate = postUpdate;
module.exports.postDelete = postDelete;
