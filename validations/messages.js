const
  {
  incorrectlyEmail,
  displayNameLength,
  incorrectlyPasswordLength,
  } = require('../dictionary/codes');

function getStatus(error) {
  let defaultState = 400;
  switch (error) {
    case '"displayName" length must be at least 8 characters long':
      defaultState = displayNameLength;
      break;
    case '"email" must be a valid email':
      defaultState = incorrectlyEmail;
      break;
      case '"password" length must be 6 characters long':
        defaultState = incorrectlyPasswordLength;
        break;
    default:
  }
  return defaultState;
}

module.exports = {
  getStatus,
};
