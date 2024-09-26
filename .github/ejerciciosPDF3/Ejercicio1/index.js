let screenLog = document.querySelector("#screen-log");
let luka = document.getElementById("output");

document.addEventListener("mousemove", logKey);


function logKey(e) {
    luka.style.display="none";
    screenLog.style.display="block"; 
    screenLog.innerText = `Mouse
    Pantalla: ${e.screenX}, ${e.screenY}
    Cliente: ${e.clientX}, ${e.clientY}`;
}

document.addEventListener("keydown",(event) => { 
    screenLog.style.display="none";
    luka.style.display="block"; 
    luka.innerText=`
    Teclado


    Tecla: ${event.key}`
    },
    true,
  );