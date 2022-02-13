const { decodeToken } = require('../jwt/decodeJwt');
const { createPost, getPosts } = require('../services/blogPostsService');
const { getCategorie } = require('../services/categoriesServices');
const { User } = require('../models');

const getPost = (async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  try {
    await getCategorie(authorization, categoryIds);

    const { data } = decodeToken(authorization);
    console.log('data', data);

    const userId = await User.findOne({ where: { email: data } });
    console.log('userid', userId.id);
    const created = await createPost(title, content, categoryIds, userId.id);
    console.log('created', created);

    const response = {
      id: created.id, userId: userId.id, title: created.title, content: created.content,
    };
    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
});

const getAllPosts = (async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    decodeToken(authorization);
    const allPosts = await getPosts();
    // console.log('all posts', allPosts);
    return res.status(200).json(allPosts);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  getPost,
  getAllPosts,
};