'use strict'
//Array.from
let arrayLike = {
  0: "ganaste",
  1: "un",
  2: "premio",
  length: 3
};

let arr = Array.from(arrayLike); // (*)toma el objeto, y si es iterable o simil-array crea un nuevo array y copia allí todos los elementos.
alert(arr.pop()); 
