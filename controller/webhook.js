 //const employees = require('../db_apis/employees.js');
 
async function post(req, res, next) {
  try {
    const context = {};
 
    const rows = "webhook";
 

    res.status(200).json(rows);

  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;