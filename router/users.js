const express = require("express");
const router = express.Router();
/* const UsersData = require("../model/userModel"); */
const {
  getAllUsers,
  getUser,
  getOneUser,
  updateOneUser,
  deleteOneUser,
  updateAllUsersData,
  addNewUser,
  userDataCheck,
} = require("../controllers/usersController");

// Get all users

router.route("/").get(getAllUsers).post(userDataCheck, addNewUser);
/* router.get("/", async (req, res) => {
  try {
    const users = await UsersData.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}); */

// Add user

/* router.post("/", async (req, res) => {
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
}); */

// Middleware / Get one user
// async function getUser(req, res, next) {
//   let user;
//   try {
//     user = await UsersData.findOne({ userName: req.params.userName });
//     if (user == null) {
//       return status(404).json({ message: "User not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
//   console.log(user);
//   res.user = user;
//   next();
// }
// Get one user

router
  .route("/:userName")
  .get(getUser, getOneUser)
  .patch(getUser, updateOneUser)
  .delete(getUser, deleteOneUser)
  .put(getUser, updateAllUsersData);

/* router.get("/:userName", getUser, (req, res) => {
  res.status(200).json(res.user);
});
 */
// Delete one user
/* 
router.delete("/:userName", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.status(200).json({ message: "User was deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}); */

// Patch one user

/* router.patch("/:userName", getUser, async (req, res) => {
  console.log(req.body);
  console.log(res.user);
  if (req.body.userName) {
    res.user.userName = req.body.userName;
  }

  if (req.body.userPass) {
    res.user.userPass = req.body.userPass;
  }
  if (req.body.age) {
    res.user.age = req.body.age;
  }
  if (req.body.fbw) {
    res.user.fbw = req.body.fbw;
  }
  if (req.body.email) {
    res.user.email = req.body.email;
  }
  try {
    await res.user.save();
    res.status(200).json({ message: "User was updated", data: res.user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}); */

/* router.route("/display/:userName").get(getUser, getOneUser); */

module.exports = router;
