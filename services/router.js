
const express = require('express');
const router = new express.Router();
const test = require('../controller/test');
const webhook = require('../controller/webhook');
 
router.route('/test').get(test.get);
router.route('/').get(webhook.post);
 
module.exports = router;