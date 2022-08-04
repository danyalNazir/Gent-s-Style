const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  body: String,
  //Populate using Referance Approach
  auther: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Review", reviewSchema);
