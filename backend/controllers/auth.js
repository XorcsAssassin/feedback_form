const {User} = require('../models/model');
const jwt= require('jsonwebtoken')

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log('Request body:', req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    console.log('User found:', user);

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log('Password does not match');
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token=jwt.sign({id: user._id},'your JWT secret')
    console.log('Password matches');
    res.json({ user: { name: user.name, email: user.email, role: user.role, token} });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    console.log("New user registration request received");

    // Create a new user instance
    const newUser = new User({ name, email, password, role });

    // Save the new user to the database
    await newUser.save();

    console.log("New user saved successfully:", newUser);
    res.status(201).json({ user: { name: newUser.name, email: newUser.email, role: newUser.role } });
  } catch (error) {
    console.error("Error saving new user:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


module.exports = {
  login,
  register,
};
