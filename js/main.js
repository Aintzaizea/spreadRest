/*  1-> Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos. */

function sumEveryOther (...num) {
    return num.reduce((acum, numero) => acum + numero);
};
console.log(sumEveryOther(8, 7 , 6 , 5));
console.log(sumEveryOther(11, 13, 12));
console.log(sumEveryOther(1, 2, 3, 4, 5));


/*Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números. */
function addOnlyNums (...params) {
    if (params === typeof " ") {
        return 
    } else {
        return params.reduce((acum, numero) => acum + numero);
    }
};

console.log(addOnlyNums(1, "perro", 2, 4));

