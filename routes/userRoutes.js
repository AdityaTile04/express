const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

// to register the user
router.post("/register", registerUser);

// to login user
router.post("/login", loginUser);

// to get current user
router.get("/current", validateToken, currentUser);

module.exports = router;
