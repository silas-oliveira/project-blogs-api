const { token } = require('../jwt/jwt');
const { validateUser, createUserInfo } = require('../services/userServices');

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

module.exports = {
  createUser,
};
