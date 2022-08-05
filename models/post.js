const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  price: String,
  description: String,
  images: [String],
  location: String,
  lat: Number, //latitude
  lng: Number, //longitude
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
