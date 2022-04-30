/* Completa la función que tomando un array de strings como argumento devuelva el más largo,
en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let elmaslargo = 'a';
    for (let iterator of param) {
        //console.log(iterator.length);
        if (iterator.length > elmaslargo.length){
            elmaslargo=iterator;
        }

    }
    return elmaslargo;
}

console.log(findLongestWord(avengers));

