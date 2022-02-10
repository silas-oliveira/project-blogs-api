const express = require('express');
const { createCategorie } = require('../controllers/categoriesController');

const { loginUser } = require('../controllers/loginController');

const { createUser, getAll, getUserById } = require('../controllers/userController');

const userRouter = express.Router();
const loginRouter = express.Router();
const getAllUsers = express.Router();
const getUser = express.Router();
const getCategorie = express.Router();

userRouter.post('/', createUser);
loginRouter.post('/', loginUser);
getAllUsers.get('/', getAll);
getUser.get('/:id', getUserById);
getCategorie.post('/', createCategorie);

module.exports = { 
  userRouter,
  loginRouter,
  getAllUsers,
  getUser,
  getCategorie,
};