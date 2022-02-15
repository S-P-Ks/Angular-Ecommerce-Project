const mongoose = require("mongoose");

const SmartPhoneModel = mongoose.Schema({
  name: String,
  price: Number,
  company: String,
});
