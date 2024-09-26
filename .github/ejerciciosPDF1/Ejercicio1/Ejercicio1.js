let Clientes = ["Bbva","IDS"];
let Empleados =["Aaron","Denysse","Sergio"];


// A) Esta opciòn es viable para crear un nuevo Array que contenga 
//todos los elementos de ambos Arrays.

let ContactosA = Clientes.concat(Empleados);

console.log(ContactosA);

//ContactosA = [ 'Bbva', 'IDS', 'Aaron', 'Denysse', 'Sergio' ]

//B) Este metodo no devuelve otro Array, por el contrario devuelve un 
//string, por lo que su implementaciòn requeriria que se consiguiera 
//separar el string resultante y despuès crear el array.

let ContactosB = Clientes.join(Empleados);

// Contactos B = BbvaAaron,Denysse,SergioIDS String obtenido Si lo 
//combinamos.

let ContactosB1 = Clientes.join();
let ContactosB2 = Empleados.join();

// Contactos B1 = Bbva,IDS
// Contactos B2 = Aaron,Denysse,Sergio
//Strings obtenidos por separado.

console.log(ContactosB);
console.log(ContactosB1);
console.log(ContactosB2);

//C) Este mètodo no devuelve un Array, devuelve el nuevo length del Array
//Se debe considerar que no crea un nuevo Array, agrega los elementos
//que se coloquen en el atributo del mètodo, en este caso si colocamos 
//otro Array no agregara cada elemento por separado, colocara el Array
//completo en el Array original, modificandolo.

let ContactosC = Clientes.push(Empleados);
console.log(ContactosC);
//Output = 3;
console.log(Clientes);

// Nuevo valor de Clientes: 
// [ 'Bbva', 'IDS', [ 'Aaron', 'Denysse', 'Sergio' ] ]

//D) Este metodo nos permite agregar o reemplazar un elemento en un Array
// pero al igual que el mètodo anterior no devuelve un nuevo array, 
//modifica el Array original agregando o retirando los elementos.

let ContactosD = Clientes.splice(2,0,Empleados);
console.log(ContactosD);
// Obtenemos un Arreglo vacìo: []
console.log(Clientes);

//Nuevo valor de Clientes:
//[ 'Bbva', 'IDS', [ 'Aaron', 'Denysse', 'Sergio' ] ]
// Observamos que es el mismo resultado que con Push


//Conclusiòn:

//Luego de visualizar los resultados se determina que concat es la funciòn
//màs viable para crear un nuevo array a partir de otros Arrays.



