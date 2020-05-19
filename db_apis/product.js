const database = require('../services/database.js');
 

 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
   
  const result = await database.findOneListingByName("Saltarines","Chatbot","chatbot");
 
  return result.rows;
}
 
module.exports.find = find;