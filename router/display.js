const express = require("express");
const router = express.Router();

const { getUser, getOneUser } = require("../controllers/usersController");

router.route("/display/:userName").get(getUser, getOneUser);

module.exports = router;
