const database = require("../services/database.js");


async function findCollection(baseName, colletionName,objectToFind) {
    try {

      const result = await database.findListByObject(objectToFind,baseName,colletionName);
      return result
    } catch (err) {
      next(err);
    }
  }


  async function validateNumber(arrayAValidar,cedula,validador) {
    try {

      let result_array = Array();
      arrayAValidar.forEach(element =>  
        {
          if (element.cedula == cedula && element.verificador==validador) {
          result_array.push(element)
          }         
        });
        return result_array;
    } catch (err) {
      next(err);
    }
  }

  async function createAnswerVerificarDigito(array) {
    try {
 let respuesta="";
      if (array.length>0) {
        
        array.forEach(element =>  
          {
            respuesta = respuesta + "Tu bono " + element.nombreBono + " de " + element.bono + " esta listo para ser retirado en nuestras agencias. \n"
          });

          return respuesta;

      } else {
        return "No tienes ningun bono activo"
      }

 
    } catch (err) {
      next(err);
    }
  }


  
module.exports.findCollection = findCollection;
module.exports.validateNumber = validateNumber;
module.exports.createAnswerVerificarDigito = createAnswerVerificarDigito;
