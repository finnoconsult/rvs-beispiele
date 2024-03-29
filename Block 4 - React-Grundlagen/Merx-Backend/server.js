const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const products = require('./products.json');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const dummyDescription = fs.readFileSync('./dummy-description.html', 'utf-8');

const users = {
  'info@rvs.at': 'ware',
};
const sessions = {};

const generateToken = () => crypto.randomBytes(16).toString('hex');
const getReleatedProducts = (id = 0) =>
  [-3, -2, 0, 1].map((offset) => ((id + offset + products.length) % products.length) + 1 + '');

// ⚠️ künstliche Verzögerung für alle Anfragen
app.use((req, res, next) => setTimeout(next, 1000));

app.use((req, res, next) => {
  req.user = sessions[req.cookies.session];
  next();
});

// Nutzeraccount anlegen
app.post('/register', (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const { email, password } = req.body;
  users[email] = password;
  res.send({ success: true, data: email });
});

// Nutzer einloggen
app.post('/login', (req, res) => {
  if (!req.body) {
    return res.status(400).send({ success: false, error: 'insufficient data provided' });
  }

  if (!users[req.body.email]) {
    return res.status(401).send({ success: false, error: 'wrong email or password' });
  }

  const { email, password } = req.body;

  if (password !== users[email]) {
    return res.status(401).send({ success: false, error: 'wrong email or password' });
  }

  // user exists and password is correct
  const session = generateToken();
  sessions[session] = email;
  res.cookie('session', session, {
    expires: 0,
    httpOnly: true /*secure: true*/,
  });
  return res.send({ success: true, data: { email, name: 'Max Muster' } });
});

// Nutzer ausloggen
app.get('/logout', (req, res) => {
  console.log(`logout user ${req.user} / session ${req.cookies.session}`);
  delete sessions[req.cookies.session];
  res.clearCookie('session');
  res.send({ success: true });
});

// Alle Produkte lesen
app.get('/products', (req, res) => {
  const data = products.slice(0, 10); // nur erste 10
  res.send({ success: true, data });
});

// Ein Produkt lesen
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === id);
  if (!product) return res.sendStatus(404);
  const data = { ...product, bodyHtml: dummyDescription, related: getReleatedProducts(+id) };
  res.send({ success: true, data });
});

// Produkt anlegen
app.post('/products', (req, res) => {
  const id = uuidv4();
  const timestamp = new Date().toISOString();
  const product = { id, timestamp, ...req.body };
  products.push(product);
  res.send({ success: true, data: product });
});

// Server starten
app.listen(3001, () => {
  console.log('Listening on port 3001.');
});
