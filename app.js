const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/favicon.ico'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/editor.html'));
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
