const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    // minlength: 3,
    // maxlength: 30,
    required: true,
    trim: true,
    // escape: true
  },
  mobileNumber: {
    type: String,
    unique: true,
    minlength: 10,
    maxlength: 14,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
