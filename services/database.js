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
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));

  return databasesList.databases;
}

async function findOneListingByObject(object, db_name, db_collection) {
  result = await client.db(db_name).collection(db_collection).findOne(object);

  if (result) {
    console.log(`Found a listing in the collection with the name '${object}':`);
    return result;
  } else {
    console.log(`No listings found with the name '${object}'`);
  }
}

async function findListByObject(object, db_name, db_collection) {
  result = await client.db(db_name).collection(db_collection).find(object);

  if (result) {
    console.log(`Found a listing in the collection with the name '${object}':`);
    return result.toArray();
  } else {
    console.log(`No listings found with the name '${object}'`);
  }
}

module.exports.findListByObject = findListByObject;
module.exports.findOneListingByName = findOneListingByObject;
module.exports.listDatabases = listDatabases;
module.exports.initialize = initialize;
