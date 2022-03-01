const express = require('express');
const bodyParser = require('body-parser');
const generateId = require('../password');

const app = express();
const polls = {}; // { hash: { hash, count, question, answers: [{ value, count }] }}

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/create-poll', (req, res) => {
  const question = req.body.question;
  const answers = req.body.answers.split('\r\n').map((value) => ({ value, count: 0 })); // ['montag'] -> [{ value: 'montag', count: 0 }]
  const hash = `${generateId()}-${generateId()}-${generateId()}`;

  polls[hash] = { hash, question, answers, count: 0 };

  res.setHeader('Location', `/poll/${hash}`);
  res.send(301);
});

app.get('/poll/:hash', (req, res) => {
  const poll = polls[req.params.hash];

  if (!poll) return res.send(404);

  res.render('poll', poll);
});

app.post('/result/:hash', (req, res) => {
  const poll = polls[req.params.hash];

  if (!poll) return res.send(404);

  const answer = poll.answers.find((a) => a.value === req.body.answer);

  if (!answer) return res.send(409);

  answer.count++;
  poll.count++;

  res.render('result', poll);
});

app.listen(8080, () => {
  console.log('Poller is listening on port 8080!');
});
