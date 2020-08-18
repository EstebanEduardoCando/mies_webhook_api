const database = require("../services/database.js");
const utils = require("../utils/utils.js");
const {Text} = require('dialogflow-fulfillment');


async function findName(req, res, next) {
    try {
        res.json({
            fulfillmentText: "Estoy en " + req.body.queryResult.intent.displayName,
          });
    } catch (err) {
      next(err);
    }
  }

  async function validateNumber(req, res, next) {
    try {
      
      myObj = new Object()
      myObj.cedula = "1718908229";
      //const result = await database.findListByObject(myObj,"MIES","cedula");
      const result = await  utils.findCollection("MIES","cedula",myObj);
      const esValido =  await utils.validateNumber(result,req.body.queryResult.outputContexts[0].parameters.cedula, req.body.queryResult.outputContexts[0].parameters.number);
      const respuesta = await utils.createAnswerVerificarDigito(esValido);

      

      const resp_facebook =   {
        "fulfillmentText": "Text response",
        "fulfillmentMessages": [
          {
            "text": {
              "text":  [respuesta]
            },
            "platform": "FACEBOOK"
          }
        ]
      }


      
    

      res.json(resp_facebook);
      

    } catch (err) {
      next(err);
    }
  }

  module.exports.findName = findName; 
  module.exports.validateNumber = validateNumber; 
