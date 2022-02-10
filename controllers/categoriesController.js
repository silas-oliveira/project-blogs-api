const { categorieCreate, getCategories } = require('../services/categoriesServices');

const createCategorie = (async (req, res, next) => {
  console.log('aut', req.body);
  const { name } = req.body;
  const { authorization } = req.headers;
  try {
    const response = await categorieCreate(name, authorization);
    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
});

const listAllCategories = (async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const response = await getCategories(authorization);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  createCategorie,
  listAllCategories,
};