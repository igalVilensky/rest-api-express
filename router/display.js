const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");
const userMdd = require("../middleware/index");

// http://localhost:5000/display/:name

router.route("/:name").get(
  userMdd.getUser
  // userMdd.toolStackArraySort,
  // userMdd.userNameCapitalized,

  // userMdd.strToNum,

  // userController.displayUser
);

// const { getUser, getOneUser } = require("../controllers/usersController");

// router.route("/:userName").get(getUser, getOneUser);

module.exports = router;
