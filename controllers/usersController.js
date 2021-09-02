const UsersData = require("../model/userModel");
const userController = {};

// Get all users - http://localhost:5000/users

userController.getAllUsers = async (req, res) => {
  try {
    const users = await UsersData.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};

// Add new user
/* userController.addNewUser = async (req, res) => {
  try {
    const newUser = await new UsersData();
  } catch (err) {}
}; */

// const express = require("express");

// // Middleware - get one user by name

// const getUser = async (req, res, next) => {
//   let user;
//   try {
//     user = await UsersData.findOne({ userName: req.params.userName });
//     if ((user.length = 0)) {
//       return status(404).json({ message: "User not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
//   /* console.log(user); */
//   res.user = user;
//   next();
// };

// // Middleware - check username in order to create new user

// const userDataCheck = async (req, res, next) => {
//   let user = req.body;
//   console.log(user);
//   try {
//     if (user.length == 0) {
//       return status(400).json({ message: "Please enter username" });
//     } else if (req.body.age < 18) {
//       return status(400).json({ message: "You must be over 18" });
//     } else if (req.body.userPass.length == 0) {
//       return status(500).send("Please enter a valid password");
//     } else if (req.body.fbw !== 48) {
//       return status(500).send(
//         "Please note that you must be a part of fbw-48 class"
//       );
//     } else if (req.body.email.length == 0) {
//       return status(401).json({ message: "Please enter an email" });
//     }
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
//   req.body = user;
//   next();
// };

// // VIew all Users

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await UsersData.find(); /* .select("userName fbw") */
//     res.status(200).json(
//       users.map((user) => {
//         /*     const {
//           _id,
//           userName,
//           userPass,
//           age,
//           fbw,
//           toolStack,
//           email,
//           userCreateDate,
//         } = user; */
//         return {
//           userId: user.userId,
//           userName: user.userName,
//           userPass: user.userPass,
//           age: user.age,
//           fbw: user.fbw,
//           toolStack: user.toolStack,
//           email: user.email,
//           userCreateDate: user.userCreateDate,
//           request: {
//             type: "GET",
//             url: `http://localhost:5000/users/${user.userName}`,
//           },
//         };
//       })
//     );
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// const getOneUser = async (req, res) => {
//   res.status(200).json(res.user);
// };

// const updateOneUser = async (req, res) => {
//   const { userName, userPass, age, fbw, toolStack, email, userCreateDate } =
//     req.body;
//   if (userName) {
//     res.user.userName = userName;
//   }
//   if (userPass) {
//     res.user.userPass = userPass;
//   }
//   if (age) {
//     res.user.age = age;
//   }
//   if (fbw) {
//     res.user.fbw = fbw;
//   }
//   if (toolStack) {
//     res.user.toolStack = toolStack;
//   }
//   if (email) {
//     res.user.email = email;
//   }
//   if (userCreateDate) {
//     res.user.userCreateDate = userCreateDate;
//   }
//   try {
//     await res.user.save();
//     res.status(200).json({ message: "User was updated", data: res.user });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// const addNewUser = async (req, res) => {
//   const user = new UsersData({
//     userName: req.body.userName,
//     userPass: req.body.userPass,
//     age: req.body.age,
//     fbw: req.body.fbw,
//     toolStack: req.body.toolStack,
//     email: req.body.email,
//   });
//   console.log(req.body.userName.length);
//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// const deleteOneUser = async (req, res) => {
//   try {
//     await res.user.remove();
//     res.status(200).json({ message: "User was deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// const updateAllUsersData = async (req, res) => {
//   try {
//     await UsersData.updateOne(
//       { userName: req.params.userName },
//       {
//         $set: {
//           userName: req.body.userName,
//           userPass: req.body.userPass,
//           age: req.body.age,
//           fbw: req.body.fbw,
//           toolStack: req.body.toolStack,
//           email: req.body.email,
//         },
//         $currentDate: {
//           userCreateDate: Date.now,
//         },
//       }
//     );
//     res.status(200).json({ message: "User was updated" });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// module.exports = {
//   getUser,
//   getAllUsers,
//   getOneUser,
//   updateOneUser,
//   deleteOneUser,
//   updateAllUsersData,
//   addNewUser,
//   userDataCheck,
// };

module.exports = userController;
