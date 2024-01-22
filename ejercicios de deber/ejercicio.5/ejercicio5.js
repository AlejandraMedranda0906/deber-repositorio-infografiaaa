'use strict'
let recipeMap = new Map([
    ['pepino', 500],
    ['tomates', 350],
    ['cebollas',    50]
  ]);
  
  // iterando sobre las claves (verduras)
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // pepino, tomates, cebollas
  }
  
  // iterando sobre los valores (precios)
  for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
  }
  
  // iterando sobre las entradas [clave, valor]
  for (let entry of recipeMap) { // lo mismo que recipeMap.entries()
    alert(entry); }  // pepino,500 (etc)