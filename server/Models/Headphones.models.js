const mongoose = require("mongoose");

const HeadPhoneSchema = mongoose.Schema({
  name: String,
  price: Number,
  company: String,
  image: URL,
});

module.exports = mongoose.model("headphones", HeadPhoneSchema, "HeadPhone");
