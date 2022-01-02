require('dotenv').config();
const express = require('express');
const database = require('./db/connection');

const PORT = 5000 || process.env.PORT;
const app = express();

database
  .run()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on PORT: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

