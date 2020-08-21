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

  async function findDocument(req, res, next, agent) {
    try {
      myObj = new Object()
      let myrespuesta ;

       
        myObj.nombre = agent.parameters.tramites
        const result = await  utils.findCollection("MIES","tramites",myObj);

        const respuesta = await utils.createAnswerSelectDocument(result);
        myrespuesta = new FacebookAnswer("FACEBOOK","Texto",respuesta);
  

      res.json(myrespuesta).end();
    } catch (err) {
      next(err);
    }
  }

  module.exports.findName = findName; 
  module.exports.findDocument = findDocument; 
