let object = {
    key1:10,
    key2:3,
    key3:40,
    key4:20
}

function comparekey(a,b){
    return a[1] - b[1];
}

function ordenar(object){
let Array1 = Object.entries(object);
let total = Array1.sort(comparekey);
return total;
}

console.log(ordenar(object));
