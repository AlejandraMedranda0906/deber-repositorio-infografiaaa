'use strict'
//Symbol.iterator
let range = { //Para hacer que el objeto range sea iterable se da un llamado con método el Symbol.iterator
    start: 1,
    end: 10,
  [Symbol.iterator]: function() {
      return{
        current: this.start,
        last: this.end,
        
        next(){ //nest es llamado en cada iteraciòn por el bucle for .. of
            if (this.current <= this.last){
                return{ done: false, value: this.current++};
            }else{
                return{ done: true};
            }    
            }
        };
     }
     };
  // for..of trabaja solamente con ese objeto devuelto.
  for (let num of range) {
    alert(num);
  }