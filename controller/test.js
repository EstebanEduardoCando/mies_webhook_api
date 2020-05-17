const database = require("../services/database.js");

async function get(req, res, next) {
  try {
    const context = await database.listDatabases();

    res.status(200).json(context);
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;
