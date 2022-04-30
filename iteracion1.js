/* Completa la función que tomando dos números como argumento devuelva el más alto. */

function sum(numberOne , numberTwo) {
   if(numberOne<numberTwo){
    return numberTwo;
   } else{
    return numberOne;
   }
}

console.log(sum(40,35));