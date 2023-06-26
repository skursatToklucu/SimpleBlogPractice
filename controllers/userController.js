const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(20);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    username,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user)
    return res.status(400).json({ error: "Invalid username and password" });

  const isMatch = bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(400).json({ error: "Invalid username and password" });

  const token = jwt.sign({ id: user.id }, "your_jwt_secret", {
    expiresIn: "1h",
  });

  res.json({
    message: "Logged in successfully",
    token,
  });
};
