const { decodeToken } = require('../jwt/decodeJwt');
const { Categorie } = require('../models');

const categorieCreate = (async (name, authorization) => {
  const decode = decodeToken(authorization);

  if (!decode) {
    const objError = { status: 404, message: 'User does not exist' };
    throw objError;
  }

  if (name === undefined) {
    const objError = { status: 400, message: '"name" is required' };
    throw objError;
  }

  const response = await Categorie.create({ name });
  return response;
});

module.exports = {
  categorieCreate,
};
