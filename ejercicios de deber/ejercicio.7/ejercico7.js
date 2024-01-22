'use strict'
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
             //(map.entries)-devuelve un array de pares clave/valor,
let obj = Object.fromEntries(map.entries()); // hace un objeto simple (*)
//(fromEntries)para obtener un objeto desde Map.
// Hecho!
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2
//let obj = Object.fromEntries(map); // omitimos .entries()- para acortar lineas.