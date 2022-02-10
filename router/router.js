const express = require('express');

const { loginUser } = require('../controllers/loginController');

const { createUser, getAll } = require('../controllers/userController');

const userRouter = express.Router();
const loginRouter = express.Router();
const getUser = express.Router();

userRouter.post('/', createUser);
loginRouter.post('/', loginUser);
getUser.get('/', getAll);

module.exports = { 
  userRouter,
  loginRouter,
  getUser,
};