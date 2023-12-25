'use strict';

const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello-world!');
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
