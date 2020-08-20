const database = require("../services/database.js");
const { response } = require("express");


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

      let respuesta = new Array;
      respuesta.push("Ya hemos validado la informacion")
      if (array.length>0) {
        
        array.forEach(element =>  
          {
            respuesta.push("Tu bono " + element.nombreBono + " de " + element.bono + " esta listo para ser retirado en nuestras agencias. \n")
          });

          return respuesta;

      } else {
        respuesta.push("No tienes ningun bono activo")

        return respuesta
      }

 
    } catch (err) {
      next(err);
    }
  }


  async function createAnswervalidateCity(array) {
    try {
      
      let respuesta = new Array;
      respuesta.push("Tenemos " + array.length + " lugar(es) cerca que podrian ayudarte.")

      if (array.length>0) {
        
        array.forEach(element =>  
          {
            respuesta.push("En la Ciudad de "+ element.Ciudad+", puedes dirigirte a la avenida: " + element.direccion + " ")
          });

          return respuesta;

      }if (array.length==0){
        respuesta.push("No existe un lugar de cobro con esos valores ingresados.")
        return respuesta
      }

 
    } catch (err) {
      next(err);
    }
  }

  async function createAnswerSelectProgram(array) {
    try {
      
      let respuesta = new Array;

      if (array.length>0) {
        respuesta.push("Este proyecto puede interesarte")
        array.forEach(element =>  
          {
            respuesta.push(element.descripcion)
            respuesta.push("Puedes acceder a ")
            respuesta.push(element.link)
            respuesta.push("para mas información.")
          });

          return respuesta;

      }if (array.length==0){
        respuesta.push("No existe un programa asociado a esa busqueda")
        return respuesta
      }

 
    } catch (err) {
      next(err);
    }
  }


  async function createCardsPrograms(array) {
    try {
      cartas = new Array;
      
      array.forEach(element =>  
        {
                   
          var detalle = new Object();
          botones = new Array;
          var detalleBoton = new Object();
          detalle.title=element.nombre
          detalle.subtitle=element.descripcion.substr(0,15) + "..."
          detalle.imageUri="https://stock.rtl.lu/rtl/800/rtl2008.lu/nt/p/2020/04/09/16/fdfbf19dc86cb2ef05908e9e83885f97.png" 
          detalleBoton.text= element.nombre
          botones.push(detalleBoton)
          detalle.buttons=botones;
          cartas.push(detalle)

        });

        return cartas;
      
 
    } catch (err) {
      next(err);
    }
  }



  





  
module.exports.findCollection = findCollection;
module.exports.validateNumber = validateNumber;
module.exports.createAnswerVerificarDigito = createAnswerVerificarDigito;
module.exports.createAnswervalidateCity = createAnswervalidateCity;
module.exports.createAnswerSelectProgram = createAnswerSelectProgram;
module.exports.createCardsPrograms = createCardsPrograms;