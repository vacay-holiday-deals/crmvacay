const router = require("express").Router();
const User = require("../db/models/userModel");
const {
  registerValidation,
  loginValidation
} = require("../validation/AuthValidation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authVerify } = require("../middleware/verifyToken");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // check if user exists
  const emailExists = await User.findOne({ email: req.body.email });

  if (emailExists) return res.status(400).send("Email already exists");

  //create hashed password
  const salt = await bcrypt.genSalt(12);
  const hashPass = await bcrypt.hash(req.body.password, salt);

  // create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPass
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if email exists
  const existingUser = await User.findOne({ email: req.body.email });

  if (!existingUser) return res.status(400).send("Email or password is wrong");

  const validPass = await bcrypt.compare(
    req.body.password,
    existingUser.password
  );

  if (!validPass) return res.status(400).send("Invalid password");

  const identity = {
    _id: existingUser._id,
    email: existingUser.email,
    name: existingUser.name
  };

  // create and assign token
  const token = jwt.sign(identity, process.env.JWT_SECRET_KEY);
  res.json({ token, user: identity });
});

// @route GET api/user/getuser
router.get("/user", authVerify, async (req, res) => {
  const currentUser = await User.findById(req.user._id).select("-password");
  res.json(currentUser);
});

module.exports = router;
