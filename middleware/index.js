const UserModel = require("../model/userModel");
const userMdd = {};

// Get user by name

userMdd.getUser = async (req, res, next) => {
  const userByName = await UserModel.findOne({ userName: req.params.userName });

  try {
    if (!userByName) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  next();
};

// Check entries

userMdd.checkUserData = (req, res, next) => {
  const { userName, userPass, age, fbw, email } = req.body;
  if (!userName || !userPass || !age || !fbw || !email) {
    return res.status(400).json({
      message:
        "Please fill all the needed fields (Username, userPass, age, fbw, email)",
    });
  }
  next();
};

// Check age

userMdd.checkAge = (req, res, next) => {
  const { age } = req.body;
  if (parseInt(age, 10) < 18) {
    return res.status(400).json({ message: "You must be over 18 years old" });
  }
  next();
};

// Check fbw

userMdd.checkFbw = (req, res, next) => {
  const { fbw } = req.body;
  if (parseInt(fbw, 10) != 48) {
    return res
      .status(400)
      .json({ message: "You are not a member of fbw-48 class" });
  }
  next();
};

module.exports = userMdd;
