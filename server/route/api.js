const express = require("express");
const router = express.Router();
const mongooose = require("mongoose");
const db = "mongodb+srv://users:code2shineusers@code2shine-rqiqh.mongodb.net/test?retryWrites=true&w=majority/signupdb";
const User = require("../models/user");

mongooose.connect(
  db,{ useNewUrlParser: true },
  err => {
    err
      ? console.log("error is", err)
      : console.log("Connected to mongodb successfully");
  }
);

router.get("/", (req, res) => {
  res.send("From API router");
});

router.post("/signup", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    error
      ? console.log("Error of signup", error)
      : res.status(200).send(registeredUser);
  });
});

router.post("/login", (req, res) => {
  let userData = req.body;
  User.findOne({ email: userData.email}, (error, user) => {
    if (error) {
      console.log("error of login api is" + error);
    } else if (!user) {
      res.status(401).send("Invalid User email");
    } else if (user.password != userData.password) {
      res.status(401).send("Invalid User password");
    } else {
      res.status(200).send("You logged in successfully mr/mrs." + userData.email);
    }
  });
});
module.exports = router;
