const express = require('express');
const app = express();
const path = require('path');
const config = require('./config.js');

//print request
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

//routes /public calls to public directory
app.use("/public", express.static(path.join(__dirname, "public")));

//routes /codemirror calls into the node_modules directory
app.use("/codemirror", express.static(path.join(__dirname, "node_modules/codemirror")));

//allows favicon.ico calls to give correct icon
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/favicon.ico'));
});

//index call gets editor page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/editor.html'));
});

//init server
const server = app.listen(config.port, () => {
  console.log('Server listening on ' + config.ip + ":" + config.port);
});
