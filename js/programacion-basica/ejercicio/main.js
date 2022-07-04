console.log("animo bro");

totalTareas = [];
let estado = "";

function Lista_tareas(tarea, estado) {
  this.actividad = tarea;
  this.estado = estado;
}

function añadir() {
  let rad_despues = document.getElementById("despues").checked;
  let rad_pendiente = document.getElementById("Pendiente").checked;
  let rad_completada = document.getElementById("Completada").checked;

  if (document.getElementById("inTareas").value != "") {
    if (rad_despues || rad_pendiente || rad_completada) {
      let tareaProxima = document.getElementById("inTareas").value;
      console.log(tareaProxima);
      let rad_despues = document.getElementById("despues").checked;
      let rad_pendiente = document.getElementById("Pendiente").checked;
      let rad_completada = document.getElementById("Completada").checked;

      if (rad_completada) {
        estado = "completado";
      }
      if (rad_pendiente) {
        estado = "pendiente";
      }
      if (rad_despues) {
        estado = "despues";
      }
      //envio el string de la tarea
      let Objetotarea = new Lista_tareas(tareaProxima, estado);
      totalTareas.push(Objetotarea);
      mostrar(tareaProxima);
      let botn = document.getElementById("btnEliminar");
      botn.style.display = "block";
    } else {
      alert("selecciona algo baboso xd");
    }
  } else {
    alert("escriba algo no sea imbecil xddd");
  }
}

function limpiar() {
  document.getElementById("inTareas").value = "";
}
let index = 0;
function mostrar(tarea) {
  let contenedor = document.getElementsByTagName("div")[3];
  let element = document.createElement("div");
  let rad_despues = document.getElementById("despues").checked;
  let rad_pendiente = document.getElementById("Pendiente").checked;
  let rad_completada = document.getElementById("Completada").checked;

  if (rad_completada) {
    console.log("completada");
    estado = "hecha";
  }
  if (rad_pendiente) {
    console.log("Pendiente");
    estado = "pendiente";
  }
  if (rad_despues) {
    console.log("despues");
    estado = "despues";
  }
  element.classList.add("tareaContainer");
  contenedor.style.display = "block";

  element.innerHTML =
    "<div class='item' id='item" +
    index +
    "' > <ul> <li>" +
    tarea +
    "</li></ul>   <input type='checkbox' id=a" +
    index +
    ">" +
    ` <span>Marque para borrar</span> <h3 id="estadoC"> Estado:${estado} </h3> </div>`;

  
  index++;
  console.log("antes");
  let longitud = totalTareas.length;
  if (longitud >=totalTareas.length) {
    console.log("cambio el arreglo");
    contenedor.appendChild(element);
  }
}

function eliminar() {
  for (let index = 0; index < totalTareas.length; index++) {
    let aux = "a" + index;
    let aux2 = "item" + index;
    console.log(aux);
    if (document.getElementById(aux).checked) {
      let cont = document.getElementById(aux2);
      cont.style.display = "none";
      totalTareas.splice(index, 1);
      ``;
    }
  }

  
}

/* des(); */
//estilos();
