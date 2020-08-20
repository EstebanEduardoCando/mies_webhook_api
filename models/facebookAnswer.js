function  FacebookAnswer(plataforma,tipoRespuesta,respuesta) {
    this.fulfillmentMessages = new Array;

    switch (tipoRespuesta) {
      case 'Texto':
        respuesta.forEach(element =>  
          {
            var text = new Object();
            text.text = new Object();
            text.text.text = new Array;
            text.text.text.push(element);
            text.platform=plataforma;
            this.fulfillmentMessages.push(text)
          });
        break;
    
        case 'Card':
        respuesta.forEach(element =>  
          {
            var card = new Object();
            var cardh = new Object();
            cardh.title = element.title
            cardh.subtitle = element.subtitle
            cardh.imageUri  = element.imageUri
            cardh.buttons = new Array;
            element.buttons.forEach(elementButton =>  
              { 
                var button = new Object();
                button.text=elementButton.text
                cardh.buttons.push(button)

              });
            
            card.card=cardh
            card.platform=plataforma;
            this.fulfillmentMessages.push(card)
          });
        break;
    }

  };

  module.exports = {
    FacebookAnswer: FacebookAnswer
}



