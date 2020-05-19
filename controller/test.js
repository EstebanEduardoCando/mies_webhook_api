const database = require("../services/database.js");
const model = require("../models/Product.js");

async function get(req, res, next) {
  try {
    //const context = await database.listDatabases();
    myObj = new Object()
    myObj.name = "Saltarines";

    const context = await database.findListByObject(myObj,"Chatbot","chatbot");

    res.status(200).json(context);
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;
