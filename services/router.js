
const express = require('express');
const router = new express.Router();
const test = require('../controller/test');
 
router.route('/test').get(test.get);
 
module.exports = router;