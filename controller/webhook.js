const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const verificar_digito = require("../controller/verificar_digito.js");


async function post(request, response , next) {
  try {   

    const agent = new WebhookClient({ request, response  });
    agent.add("Got it.");
    switch (request.body.queryResult.intent.displayName) {
      case "verificar_digito":
        const result_verificar = verificar_digito.validateNumber(request, response , next);
    }


  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
