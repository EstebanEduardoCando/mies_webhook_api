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

  async function findProgram(req, res, next, agent) {
    try {
      myObj = new Object()
      let myrespuesta ;

      if(agent.parameters.programas_mies=='Todos')
      {
        const result = await  utils.findCollection("MIES","programas",myObj);
        const respuesta = await utils.createCardsPrograms(result);
        myrespuesta = new FacebookAnswer("FACEBOOK","Card",respuesta);

      }else{
        myObj.nombre = agent.parameters.programas_mies
        const result = await  utils.findCollection("MIES","programas",myObj);
        const respuesta = await utils.createAnswerSelectProgram(result);
        myrespuesta = new FacebookAnswer("FACEBOOK","Texto",respuesta);
      }

      res.json(myrespuesta).end();
    } catch (err) {
      next(err);
    }
  }

  module.exports.findName = findName; 
  module.exports.findProgram = findProgram; 
