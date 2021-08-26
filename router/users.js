const express = require("express");
const router = express.Router();

const UsersData = require("../model/userModel");

router.get("/", async (req, res) => {
  try {
    const users = await UsersData.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const user = new UsersData({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
