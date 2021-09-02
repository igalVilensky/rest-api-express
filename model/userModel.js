const mongoose = require("mongoose");
const usersDataSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: [true, "Name is required"],
  },
  userPass: {
    type: String,
    required: [true, "Please enter the password"],
  },
  age: {
    type: Number,
    required: [true, "Please choose your age"],
  },
  fbw: {
    type: Number,
    required: [true, "Please choose your class"],
  },
  toolStack: {
    type: Array,
    default: [],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please enter your email"],
  },
  userCreateDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("UsersData", usersDataSchema);
