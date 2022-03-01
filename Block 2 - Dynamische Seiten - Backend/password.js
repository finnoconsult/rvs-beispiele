module.exports = function generatePassword() {
  return Math.random().toString(36).substr(2);
};
