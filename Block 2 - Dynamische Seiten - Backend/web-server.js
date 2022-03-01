const http = require('http');
const os = require('os');
const generatePassword = require('./password');

function handler(requests, reponse) {
  const uptimeInDays = (os.uptime() / 60 / 60 / 24).toFixed(2);
  reponse.statusCode = 200;
  reponse.setHeader('Content-Type', 'text/html;charset=utf8');
  reponse.end(`
    <body style="text-align: center;">
      <h1>Mein Passwortgenerator</h1>

      <p>Lass dir dein ganz persönliches, sicheres Passwort generieren:</p>

      <p style="color: red; font-size: 64px">
        <code>${generatePassword()}</code>
      </p>

      <footer>
        Dieser Service läuft seit ${uptimeInDays} Tagen auf einem ${os.arch()}
      </footer>
    <body>
    `);
}

const server = http.createServer(handler);

server.listen(8080, () => console.log('Server started'));
