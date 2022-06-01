console.log("animo bro");

totalTareas = [];

function Lista_tareas(tarea) {
  this.actividad = tarea;
}

function añadir() {
  let tareaProxima = document.getElementById("inTareas").value;
  console.log(tareaProxima);
  //envio el string de la tarea
  let Objetotarea = new Lista_tareas(tareaProxima);
  totalTareas.push(Objetotarea);
  mostrar(tareaProxima);
  let botn= document.getElementById("btnEliminar");
  botn.style.display="block";
  
}

function limpiar() {
  document.getElementById("inTareas").value = "";
  
}
let index= 0;
function mostrar(tarea) {
  let contenedor = document.getElementsByTagName("div")[1];
  let element = document.createElement("div");
  contenedor.style.display = "flex";
  
  element.innerHTML =
    "<div class='item' id='item"+index+"' > <ul> <li>" +
    tarea +
    "</li></ul>   <input type='checkbox' id=a"+index+ ">" +
    " <span>Marque para borrar</span> </div>";

  contenedor.appendChild(element);
  index++;
}


function des() {
  console.log("entra al dess");
  for (let index = 0; index < totalTareas.length; index++) {
   let aux = "a"+index;
   let aux2 = "item"+index;
   console.log(aux);
    if (document.getElementById(aux).checked) {
      let cont=document.getElementById(aux2);
      cont.style.display="none"
    totalTareas.splice(index,1);
   } 
    
  }
 
 
  
}

des();