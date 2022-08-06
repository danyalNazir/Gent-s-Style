const Post = require("../models/post");
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dm9f9xbgz",
  api_key: "964974529749848",
  api_secret: process.env.CLOUDINARY_SECRET,
});

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
  req.body.post.images = [];
  for (const file of req.files) {
    //Here req.files === upload.array("images",4) in posts router
    let image = await cloudinary.v2.uploader.upload(file.path);
    req.body.post.images.push({
      url: image.secure_url,
      public_id: image.public_id,
    });
  }
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
  //find the post by id
  const post = await Post.findById(req.params.id);
  //check if there's an image for deletion
  if (req.body.deleteImages && req.body.deleteImages.length) {
    //assign req.body.deleteImages to its own variable
    let deleteImages = req.body.deleteImages; //returns array of "public_id"s of deleteImages
    //loop over deleteImages(here we are using "for of files" loop because of async function)
    for (const public_id of deleteImages) {
      //delete images from cloudinary
      await cloudinary.v2.uploader.destroy(public_id);
      //delete image from post.images
      for (const image of post.images) {
        if (image.public_id === public_id) {
          let index = post.images.indexOf(image);
          post.images.splice(index, 1);
        }
      }
    }
  }
  //check if there're any new images for upload
  if (req.files) {
    //upload images
    for (const file of req.files) {
      //Here req.files === upload.array("images",4) in posts router
      let image = await cloudinary.v2.uploader.upload(file.path);
      //add image to post.images array
      post.images.push({
        url: image.secure_url,
        public_id: image.public_id,
      });
    }
  }
  //update the post with any new properties.
  post.title = req.body.post.title;
  post.price = req.body.post.price;
  post.description = req.body.post.description;
  post.location = req.body.post.location;
  //save the updated post into DataBase
  await post.save();
  //redirect to show page
  res.redirect(`/posts/${post.id}`);
}

//DELETE /post/:id
async function postDelete(req, res, next) {
  //find the post by id
  const post = await Post.findById(req.params.id);
  //loop over deleteImages(here we are using "for of files" loop because of async function)
  for (const image of post.images) {
    //delete images from cloudinary
    await cloudinary.v2.uploader.destroy(image.public_id);
  }
  //delete the post from DataBase
  await post.remove();
  res.redirect("/posts");
}

module.exports.postIndex = postIndex;
module.exports.postNew = postNew;
module.exports.postCreate = postCreate;
module.exports.postShow = postShow;
module.exports.postEdit = postEdit;
module.exports.postUpdate = postUpdate;
module.exports.postDelete = postDelete;
