const { token } = require('../jwt/jwt');
const { validateUser, createUserInfo, findUsers } = require('../services/userServices');

const createUser = (async (req, res, next) => {
  try {
    console.log(req.body);
    const { displayName, email, password, image } = req.body;

    validateUser({ displayName, email, password });
    
    const userCreated = await createUserInfo({ displayName, email, password, image });

    const tokenGenerate = token(userCreated);

    return res.status(201).json({ token: tokenGenerate });
  } catch (error) {
    next(error);
  }
});

const getAll = (async (req, res, next) => {
  const { authorization } = req.headers;
  // console.log('aut', authorization);
  try {
    const users = await findUsers(authorization);
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  createUser,
  getAll,
};
