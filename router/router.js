const express = require('express');

const { loginUser } = require('../controllers/loginController');

const { createUser } = require('../controllers/userController');

const userRouter = express.Router();
const loginRouter = express.Router();

userRouter.post('/', createUser);
loginRouter.post('/', loginUser);

module.exports = { 
  userRouter,
  loginRouter,
};