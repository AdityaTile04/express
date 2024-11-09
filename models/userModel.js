const mongoose = require("mongoose");

const userShema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "please add email address"],
      unique: [true, "email already taken"],
    },
    password: {
      type: String,
      required: [true, "please add password"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userShema);

module.exports = User;
