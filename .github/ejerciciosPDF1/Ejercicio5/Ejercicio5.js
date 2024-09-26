let myArray = [1,2,3,4];

function limites(myArray){
const limiteinferior = myArray.reduce((previous, current) => {
    return current < previous ? current : previous;
 });
const limitesuperior = myArray.reduce((previous, current) => {
     return current > previous ? current : previous;
  });
  
  console.log("limite superior:"+limitesuperior, "Limite inferior" + limiteinferior);
}

limites(myArray);