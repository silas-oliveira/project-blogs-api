const { decodeToken } = require('../jwt/decodeJwt');
const { createPost } = require('../services/blogPostsService');
const { getCategorie } = require('../services/categoriesServices');
const { User } = require('../models');

const getPost = (async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  try {
     await getCategorie(authorization, categoryIds);

      const { data } = decodeToken(authorization);

      const userId = await User.findOne({ where: { email: data } });
      const created = await createPost(title, content, categoryIds, userId.id);
      
    const response = { 
      id: created.id, userId: userId.id, title: created.title, content: created.content };
    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  getPost,
};