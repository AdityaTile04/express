const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// register controller
const registerUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Register the user",
  });
});

// login controller
const loginUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Login the user",
  });
});

// current user controller
const currentUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Current user information",
  });
});

module.exports = { registerUser, loginUser, currentUser };
