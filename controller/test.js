 //const employees = require('../db_apis/employees.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    //context.id = parseInt(req.params.id, 10);
 
    const rows = 88;
 

    res.status(200).json(rows);

  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get;