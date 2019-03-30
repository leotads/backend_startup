require('module-alias/register');
require('dotenv').config();

const config = require('@config');

const app = require('@app');

app.listen(config.app.port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`iniciou em: http://localhost:${config.app.port}`);
});
