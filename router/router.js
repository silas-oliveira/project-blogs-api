const express = require('express');

const { loginUser } = require('../controllers/loginController');

const { createUser, getAll, getUserById } = require('../controllers/userController');

const userRouter = express.Router();
const loginRouter = express.Router();
const getAllUsers = express.Router();
const getUser = express.Router();

userRouter.post('/', createUser);
loginRouter.post('/', loginUser);
getAllUsers.get('/', getAll);
getUser.get('/:id', getUserById);

module.exports = { 
  userRouter,
  loginRouter,
  getAllUsers,
  getUser,
};