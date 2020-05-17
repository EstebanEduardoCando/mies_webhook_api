const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");

async function post(req, res, next) {
  try {
    if (req.body.queryResult.intent.displayName == "welcome") {
      res.json({
        fulfillmentText: "webhook",
      });
    }
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
