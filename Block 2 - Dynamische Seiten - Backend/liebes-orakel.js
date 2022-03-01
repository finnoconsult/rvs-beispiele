const name1 = process.argv[2];
const name2 = process.argv[3];

const getNameValue = (name) => name.split('').reduce((sum, c) => sum + c.charCodeAt(), 0);

// function getNameValue(name) {
//   var array = name.split(''); // ['a', 'd', 'a']
//   var count = 0;
//
//   for (var i = 0; i < array.length; i++) {
//     var value = array[i].charCodeAt();
//     count = count + value;
//   }
//
//   return count;
// }

function getScore(name1, name2) {
  const score1 = getNameValue(name1);
  const score2 = getNameValue(name2);
  return ((Math.min(score1, score2) / Math.max(score1, score2)) * 100).toFixed();
}

// --- main ---

if (!name1 || !name2) {
  console.error('Bitte gib 2 Namen an');
} else {
  const score = getScore(name1, name2);
  console.log(`Ihr passt zu ${score}% zusammen.`);
}
