const Joi = require('@hapi/joi');

const blogPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.required(),
});

module.exports = {
  blogPostSchema,
};
