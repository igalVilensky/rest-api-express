const UserModel = require("../model/userModel");
const userMdd = {};

// Get user by name

userMdd.getUser = async (req, res, next) => {
  const userByName = await UserModel.findOne({ userName: req.params.userName });
  console.log(userByName);
  try {
    if (!userByName) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
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

// Display username

userMdd.userNameCapitalized = (req, res, next) => {
  const { userName } = res.user;
  let userNameArr = userName.split(" ");

  let userNameFinally = [];
  for (let i = 0; i < userNameArr.length; i++) {
    userNameFinally.push(
      userNameArr[i].charAt(0).toUpperCase() +
        userNameArr[i].slice(1).toLowerCase()
    );
  }
  res.user.userName = userNameFinally.join(" ");
  next();
};

// Sort toolStack arr alphabetically
userMdd.toolStackArrSort = (req, res, next) => {
  const { toolStack } = res.user;
  res.user.toolStack = toolStack.sort();
  console.log("HI");
  next();
};

// Turn age and fbw into numbers
userMdd.strToNum = (req, res, next) => {
  const { age, fbw } = res.user;

  res.user.age = parseInt(age, 10);
  res.user.fbw = parseInt(fbw, 10);
  next();
};
module.exports = userMdd;
