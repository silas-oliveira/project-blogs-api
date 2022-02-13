const { BlogPost, User, Category } = require('../models');
const { blogPostSchema } = require('../validations/validateBlogPost');

const createPost = (async (title, content, categoryIds, userId) => {
  // console.log('category', categoryIds);
  const { error } = blogPostSchema.validate({ title, content, categoryIds });

  if (error) {
    const objError = { status: 400, message: error.message };
    throw objError;
  }

  const createdAt = new Date();
  const updatedAt = new Date();

  const response = await BlogPost
  .create({ title, content, userId, createdAt, updatedAt });
  
  if (categoryIds === undefined || null) {
    const objError = { status: 400, message: '"categoryIds" not found' };
    throw objError;
  }

  return response;
});

const getPosts = (async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
});

module.exports = {
  createPost,
  getPosts,
};
