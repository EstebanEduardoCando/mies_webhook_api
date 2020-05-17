const dbConfig = require("../config/database");
const { MongoClient } = require("mongodb");
const client = new MongoClient(dbConfig.url, { useUnifiedTopology: true });

async function initialize() {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }
}

async function listDatabases() {
  await client.connect();
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));

  return databasesList.databases;
}

module.exports.listDatabases = listDatabases;
module.exports.initialize = initialize;
