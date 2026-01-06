// utils/jwt.js
const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Change this to a stronger secret in production

const generateToken = (user) => {
  const token = jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
