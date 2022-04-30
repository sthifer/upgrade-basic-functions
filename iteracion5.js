/* Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de
lo contrario cuente la longitud del string y lo sume.
Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let sumNumber = 0;
  let sumWord = 0;

    for (const iterator of param) {
        if (typeof iterator === 'number'){
            sumNumber += iterator;
        }else if (typeof iterator === 'string'){
            sumWord += iterator.length;
        }
        

    }

    console.log(sumNumber);
    console.log(sumWord)

}

averageWord(mixedElements);