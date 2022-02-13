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

const getCategories = (async (authorization) => {
  if (decodeToken(authorization)) {
    const response = await Categorie.findAll();

    return response;
  }
});

const getCategorie = (async (authorization, categoryIds) => {
  if (categoryIds === undefined) {
    const objError = { status: 400, message: '"categoryIds" is required' };
    throw objError;
  }
  if (decodeToken(authorization)) {
    const response = await Categorie.findAll({ where: { id: categoryIds } });
    if (response.length === 0) {
      const objError = { status: 400, message: '"categoryIds" not found' };
      throw objError;
    }

    return response;
  }
});

module.exports = {
  categorieCreate,
  getCategories,
  getCategorie,
};
