'use strict'
//tenemos un objeto plano
let obj = {
    name: "Ale",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  //devuelve un array de pares clave/valor para un objeto en ese preciso formato
  
  alert( map.get('name') ); // Ale


