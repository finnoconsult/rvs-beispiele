var lies = require('./liesDatei');

var callback = function (inhalt) {
  console.log('inhalt: ' + inhalt);
};

lies('lorem.txt', callback);

console.timeEnd('a');
