const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  price: String,
  description: String,
  images: [{ url: String, public_id: String }],
  location: String,
  coordinates: Array,
  //Populate using Referance Approach
  auther: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  reviews: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = mongoose.model("Post", postSchema);
