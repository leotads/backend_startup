const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`iniciou em: http://localhost:3000`);
});
