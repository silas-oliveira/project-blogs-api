const express = require('express');
const { getPost } = require('../controllers/blogPosts.controller');
const { createCategorie, listAllCategories } = require('../controllers/categoriesController');

const { loginUser } = require('../controllers/loginController');

const { createUser, getAll, getUserById } = require('../controllers/userController');

const userRouter = express.Router();
const loginRouter = express.Router();
// const getAllUsers = express.Router();
// const getUser = express.Router();
const categorieRouter = express.Router();
// const getAllCategories = express.Router();
const postRouter = express.Router();

// user

userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.get('/', getAll);

// login

loginRouter.post('/', loginUser);

// post

postRouter.post('/', getPost);

// categories
categorieRouter.post('/', createCategorie);
categorieRouter.get('/', listAllCategories);

module.exports = { 
  userRouter,
  loginRouter,
  categorieRouter,
  postRouter,
  // getAllUsers,
  // getUser,
  // getCategorie,
  // getAllCategories,
  // post,
};