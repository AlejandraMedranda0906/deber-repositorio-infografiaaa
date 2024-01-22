'use strict'
// Mostramos el nuevo array con los números duplicados
alert(numerosDuplicados); // Salida: [2,4,6,8,10,12,14,16,18,20]

let map = new Map();

map.set('1', 'str1');   // un string como clave-(set) almacena el valor asociado a la clave.
map.set(1, 'num1');     // un número como clave
map.set(true, 'bool1'); // un booleano como clave

// ¿recuerda el objeto regular? convertiría las claves a string.
// Map mantiene el tipo de dato en las claves, por lo que estas dos son diferentes:
alert( map.get(1)   ); // 'num1'...(get)devuelve el valor de la clave. Será undefined si la clave no existe en map.
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
