const database = require("../services/database.js");
const utils = require("../utils/utils.js");
let facebookAnswer = require("../models/facebookAnswer.js");
let FacebookAnswer = facebookAnswer.FacebookAnswer;


async function findName(req, res, next) {
    try {
        res.json({
            fulfillmentText: "Estoy en " + req.body.queryResult.intent.displayName,
          });
    } catch (err) {
      next(err);
    }
  }

  async function validateCity(req, res, next) {
    try {
      myObj = new Object()
      myObj.provincia = req.body.queryResult.outputContexts[0].parameters.provincias_ecuador;
      myObj.Ciudad = req.body.queryResult.outputContexts[0].parameters.ciudades_ecuador;

      const result = await  utils.findCollection("MIES","LugaresCobro",myObj);
      const respuesta = await utils.createAnswervalidateCity(result);

      let myrespuesta = new FacebookAnswer("FACEBOOK",respuesta);
      res.json(myrespuesta).end();
    } catch (err) {
      next(err);
    }
  }

  module.exports.findName = findName; 
  module.exports.validateCity = validateCity; 
