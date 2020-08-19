function  FacebookAnswer(plataforma,respuesta) {
    this.fulfillmentMessages = new Array;

    respuesta.forEach(element =>  
      {
        var tipo = new Object();
        tipo.text = new Object();
        tipo.text.text = new Array;
        tipo.text.text.push(element);
        tipo.platform=plataforma;
        this.fulfillmentMessages.push(tipo)
      });

  };

  module.exports = {
    FacebookAnswer: FacebookAnswer
}



