const { MongoClient } = require('mongodb');
const { DB_CONNECTION_URL, DB_NAME } = process.env;

const client = new MongoClient(DB_CONNECTION_URL);

const run = async () => {
  await client.connect();

  const db = client.db(DB_NAME);
  
  console.log('Successfully connected to database.');

  return db;
};

module.exports = { run, client };
