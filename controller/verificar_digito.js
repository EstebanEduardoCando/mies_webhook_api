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

  async function validateNumber(req, res, next,agent) {
    try {
      
      myObj = new Object()
      myObj.cedula = req.body.queryResult.outputContexts[0].parameters.cedula;
      const result = await  utils.findCollection("MIES","cedula",myObj);
      const esValido =  await utils.validateNumber(result,req.body.queryResult.outputContexts[0].parameters.cedula, req.body.queryResult.outputContexts[0].parameters.digito);
      let myrespuesta;

      if(esValido.length>0){
        const respuesta = await utils.createAnswerVerificarDigito(esValido);
        myrespuesta = new FacebookAnswer("FACEBOOK","Texto",respuesta);
      }else{
        myrespuesta = new FacebookAnswer("FACEBOOK","Texto",["Tu digito verificador no concuerda. Ingresa otra cedula."]);
      }
      res.json(myrespuesta).end();   
      

    } catch (err) {
      next(err);
    }
  }

  module.exports.findName = findName; 
  module.exports.validateNumber = validateNumber; 
