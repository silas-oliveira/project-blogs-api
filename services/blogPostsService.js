const { BlogPost } = require('../models');
const { blogPostSchema } = require('../validations/validateBlogPost');

const createPost = (async (title, content, categoryIds, userId) => {
  const { error } = blogPostSchema.validate({ title, content, categoryIds });
  if (error) {
    console.log('anna error', error);
    const objError = { status: 400, message: error.message };
    throw objError;
  }

  const published = new Date();
  const updated = new Date();

  const response = await BlogPost
    .create({ title, content, userId, published, updated });

  if (categoryIds === undefined || null) {
    const objError = { status: 400, message: '"categoryIds" not found' };
    throw objError;
  }

  return response;
});

module.exports = {
  createPost,
};
