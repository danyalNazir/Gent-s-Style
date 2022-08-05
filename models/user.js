const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose"); /*that simplifies building 
username and password login with Passport for Authentication. */

const userSchema = mongoose.Schema({
  email: String,
  image: String,
  posts: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Post",
    },
  ], //Populate using Referance Approach
}); /*Passport-Local-Mongoose will add a username, hash and salt field to store the username,
 the hashed password and the salt value. */

userSchema.plugin(
  passportLocalMongoose
); /*Schemas are pluggable, that is, they allow for 
applying pre-packaged capabilities to extend their functionality */
module.exports = mongoose.model("User", userSchema);
