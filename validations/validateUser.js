const Joi = require('@hapi/joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(6).required()
    .messages({
      'string.min': '"password" length must be 6 characters long',
      'string.max': '"password" length must be 6 characters long',
    }),
});

module.exports = {
  userSchema,
};
