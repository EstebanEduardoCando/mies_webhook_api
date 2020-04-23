const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
async function post(req, res, next) {
  try {
      const agent = new WebhookClient({ req, res });
      console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
      console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
     
      function welcome(agent) {
        agent.add(`Welcome from webhook`);
      }
     
      function fallback(agent) {
        agent.add(`I didn't understand from webhook`);
        agent.add(`I'm sorry, can you try again? from webhook`);
      }

  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;