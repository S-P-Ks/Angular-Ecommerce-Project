const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("user", UserSchema, "Users");
