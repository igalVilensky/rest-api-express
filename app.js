const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// Allow Express to understand json
app.use(express.json());
// Routes
const userRouter = require("./router/users");
app.use("/users", userRouter);
const displayRouter = require("./router/display");
app.use("/display", displayRouter);
// Mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

app.get("/", (req, res) => {
  try {
    res.status(200).send("Welcome to our app");
  } catch (err) {
    res.status(err.status).json(err.message);
  }
});

module.exports = app;
