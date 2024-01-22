'use strict'
//Podemos recorrer Set con for..of o usando forEach
let set = new Set(["naranja", "manzana", "bananas"]);

for (let value of set) alert(value);

// lo mismo que forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});//naranja, manzana, bananas 2 veces