const express = require("express");
const router = express.Router();
const Model = require("../models/model");
const User = require("../models/user");
const bcrypt = require("bcrypt");

// sign up
router.post("/signup", async (req, res) => {
  try {
    // generate hashed password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // create a new user model
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    // save user to db
    const userToSave = await user.save();
    res.status(200).json(userToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// sign in
router.post("/signin", async (req, res) => {
  // find user with matching email
  const user = await User.findOne({
    email: req.body.email,
  });

  if (user == null) {
    return res.status(400).send("User with this email does not exist");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("User Logged In");
    } else {
      res.send("Incorrect Password");
    }
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
