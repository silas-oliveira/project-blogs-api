require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const decodeToken = (tokenInfo) => {
  try {
    const token = jwt.verify(tokenInfo, secret);
    
    return token;
  } catch (error) {
    console.log(tokenInfo);
    if (tokenInfo === undefined || !tokenInfo) {
      const objError = { status: 401, message: 'Token not found' };
      throw objError;
    }
    const objError = { status: 401, message: 'Expired or invalid token' };
    throw objError;
  }
};

module.exports = {
  decodeToken,
};