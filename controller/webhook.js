const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const verificar_digito = require("../controller/verificar_digito.js");
const select_city = require("../controller/select_city.js");


async function post(request, response , next) {
  try {   

    const agent = new WebhookClient({ request, response  });


/*if(request.body.queryResult.intent.displayName=="verificar_digito")
{
  verificar_digito.validateNumber(request, response , next);
}if(request.body.queryResult.intent.displayName=="provincia - select.city")
{
  select_city.validateCity(request, response , next);
}*/

   switch (request.body.queryResult.intent.displayName) {
      case "verificar_digito":
        verificar_digito.validateNumber(request, response , next);
        break;
      case "provincia - select.city":
        select_city.validateCity(request, response , next);
        break;
    }

  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
