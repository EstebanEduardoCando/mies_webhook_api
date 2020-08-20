const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const verificar_digito = require("../controller/verificar_digito.js");
const select_city = require("../controller/select_city.js");
const select_program = require("../controller/select_program.js");


async function post(request, response , next) {
  try {   

    const agent = new WebhookClient({ request, response  });

   switch (request.body.queryResult.intent.displayName) {
      case "verificar_digito":
        verificar_digito.validateNumber(request, response ,next,  agent);
        break;
      case "provincia - select.city":
        select_city.validateCity(request, response ,next, agent);
        break;
      case "3otros.bonos - select.program":
        select_program.findProgram(request, response ,next, agent);
        break;
    }

  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
