const Router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../Models/user.models");
const { getAuth } = require("firebase/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

Router.get("/", (req, res) => {
  res.redirect("http://localhost:4200/auth/signup");
});

Router.post("/", (req, res) => {
  console.log("Got Request");
  res.redirect(307, "/api/login");
});

Router.post("/register", async (req, res) => {
  const body = req.body;
  const password = await bcrypt.hash(body.password, 10);
  body.password = password;
  const u = new User(body);
  u.save((err, registeredUser) => {
    if (err) {
      console.log(err);
      res.status(401).send("Something went wrong");
    } else {
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, "secretkey");
      let user = { name: registeredUser.username, email: registeredUser.email };
      res.status(200).send({ token, user });
    }
  });
});

Router.post("/login", async (req, res) => {
  console.log("Request Recieved");
  let userData = req.body;
  console.log(userData);

  User.findOne({ email: userData.email }, async (err, user) => {
    if (err) {
      return res.status(400).send("Found No user with Email ID");
    } else {
      if (!user) {
        return res.status(400).send("Found No user with Email ID");
      }
      const passMatch = bcrypt.compare(user.password, userData.password);
      if (!passMatch) {
        return res.status(400).send("worng password");
      }

      let payload = { subject: user._id };
      let token = jwt.sign(payload, "secretkey");
      let u = { name: user.username, email: user.email };
      return res.status(200).send({ token, u });
    }
  });
});

module.exports = Router;
