const { token } = require('../jwt/jwt');
const { findLogin, validateLogin } = require('../services/loginServices');

const loginUser = (async (req, res, next) => {
  try {
    const { email, password } = req.body;

    validateLogin({ email, password });

    const infoLogin = await findLogin({ email, password });

    const tokenGenerate = token(infoLogin);

    return res.status(200).json({ token: tokenGenerate });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  loginUser,
};
