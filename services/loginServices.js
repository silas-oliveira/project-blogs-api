const { User } = require('../models');
const { getStatus } = require('../validations/messages');
const { loginSchema } = require('../validations/validateLogin');

const validateLogin = ({ email, password }) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    const objError = { status: getStatus(error.message), message: error.message };
    throw objError;
  }
};

const findLogin = async ({ email, password }) => {
  console.log('tiagao Da Massa', email, password);
  const [response] = await User.findAll({ where: { email, password } });
  console.log('oshiro validate login', response);
  
  if (response === undefined) {
    const objError = { status: 400, message: 'Invalid fields' };
    throw objError;
  }

  const test = response.dataValues.email;
  
  return test;
};

module.exports = {
  validateLogin,
  findLogin,
};