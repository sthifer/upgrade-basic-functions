/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
Puedes usar este array para probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    let contador = [];
    let esta = false;
    for(let i=0; i<param.length; i++){
        esta = false;
        for (const key in contador) {
            if (contador[key].name == param[i]){
                contador[key].total++;
                esta = true;
            }
        }

        if (!esta){
            contador.push({
                name: param[i],
                total: 1,
            });
        }
        

    }

    return contador;

  }

  console.log(repeatCounter(counterWords));