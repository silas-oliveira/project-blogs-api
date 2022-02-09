require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const token = (infoUser) => {
  const tokenCreate = jwt.sign({ data: infoUser }, secret, jwtConfig);
  return tokenCreate;
};

module.exports = {
  jwtConfig,
  token,
};
