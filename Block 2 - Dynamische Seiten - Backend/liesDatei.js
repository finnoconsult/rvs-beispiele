const fs = require('fs');

module.exports = function liesDatei(filename, callback) {
  fs.readFile(filename, 'utf8', (err, content) => {
    if (err) console.error(err);
    else callback(content);
  });
};
