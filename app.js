const express = require('express');
const app = express();
const path = require('path');
const config = require('./config.js');

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/codemirror", express.static(path.join(__dirname, "node_modules/codemirror")));


app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/favicon.ico'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/editor.html'));
});

const server = app.listen(config.port, () => {
  console.log('Server listening on ' + config.ip + ":" + config.port);
});
