const usersData = require("../model/userModel");
const express = require("express");

// Middleware - get one user by name

const getUser = async (req, res, next) => {
  let user;
  try {
    user = await UsersData.findOne({ userName: req.params.userName });
    if (user == null) {
      return status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log(user);
  res.user = user;
  next();
};

// VIew all Users

const getAllUsers = async (req, res) => {
  try {
    const users = await UsersData.findOne();
    res.status(200).json(
      users.map((user) => {
        /*     const {
          _id,
          userName,
          userPass,
          age,
          fbw,
          toolStack,
          email,
          userCreateDate,
        } = user; */
        return {
          userId: user.userId,
          userName: user.userName,
          userPass: user.userPass,
          age: user.age,
          fbw: user.fbw,
          toolStack: user.toolStack,
          email: user.email,
          userCreateDate: user.userCreateDate,
          request: {
            type: "GET",
            url: `http://localhost:5000/users/${user.name}`,
          },
        };
      })
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOneUser = async (req, res) => {
  res.status(200).json(res.user);
};

module.exports = {
  getUser,
  getAllUsers,
  getOneUser,
};
