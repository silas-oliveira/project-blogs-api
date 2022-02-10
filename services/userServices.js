const { decodeToken } = require('../jwt/decodeJwt');
const { User } = require('../models');
const { getStatus } = require('../validations/messages');
const { userSchema } = require('../validations/validateUser');

const validateUser = ({ displayName, email, password }) => {
  const { error } = userSchema.validate({ displayName, email, password });
  if (error) {
    const objError = { status: getStatus(error.message), message: error.message };
    throw objError;
  }
};

const createUserInfo = async ({ displayName, email, password, image }) => {
  const [validateEmail] = await User.findAll({ where: { email } });

  if (validateEmail !== undefined) {
    const objError = { status: 409, message: 'User already registered' };
    throw objError;
  }

  const { id } = await User.create({ displayName, email, password, image });
  return id;
};

const findUsers = (async (authorization) => {
  if (decodeToken(authorization)) {
    const response = await User.findAll();

    return response;
  }
});

const findUser = (async (id, authorization) => {
  const decode = decodeToken(authorization);
  if (!decode) {
    const objError = { status: 404, message: 'User does not exist' };
    throw objError;
  }
  const response = await User.findByPk(id);

  if (response === null) {
    const objError = { status: 404, message: 'User does not exist' };
    throw objError;
  }
  return response;
});

module.exports = {
  validateUser,
  createUserInfo,
  findUsers,
  findUser,
};
