let numbers = [5,32,43,4];

let numbers2 = numbers.filter(function(n){return n%2!==0;})

console.log(numbers2);

/*
    El mètodo filter debe recibir una funciòn que contenga requisitos
    para agregar un elemento a un nuevo Array, en este caso la funciòn
    esta buscando todo nùmero que no sea par o de acuerdo con los operadores
    todo nùmero que al dividirlo entre 2 su resto sea diferente de cero
    esta funciòn recibe como argumento cada uno de los elementos del Array
    numbers y los compara, los que cumplen son copiados en un nuevo array
    que se llama numbers 2:

    Numbers2 = [ 5, 43 ]
*/