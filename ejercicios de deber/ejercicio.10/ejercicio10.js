'use strict'
//uso de Object.values-para recorrer los valores de propiedad
let user = {
    name: "Ale",
    age: 30
  };
  
  // bucle sobre los valores
  for (let value of Object.values(user)) {
    alert(value); // Ale, luego 30
  }


  