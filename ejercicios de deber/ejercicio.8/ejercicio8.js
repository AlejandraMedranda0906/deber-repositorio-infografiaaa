'use strict'
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // convertir precios a array, map - cada par clave/valor en otro par
    // y luego fromEntries nos devuelve el objeto
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  
  alert(doublePrices.meat); // 8