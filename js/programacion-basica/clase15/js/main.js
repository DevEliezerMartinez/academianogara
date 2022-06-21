/*
const animals2={
    name1:'Perro',
    name2:'Gato',
    name3:'Delfin',
    name4:'Perico',
    name5:'Vaca'
}

const nombre = 'eliezer';
for (const iterator of nombre) {
    console.log(iterator);
    
}


For in no funciona con arrays






*/

/*
For of no funciona para objetos
for (const iterator of animals2) {
    console.log(iterator);  
    
} 


const user='caress';
const user2='caress aksjdha aksdjhasdk kajsdha';
/*for(let index=0;index<animals.length;index ++){
console.log(animals[index]);
}
for(const key in animals){
console.log(key,animals2[key]);
}
/*for(const iterator user2){
console.log(iterator);
}*/

/*
Como se hacia antes

function Vehiculo(motor,color, velocidad, nombre){
    // las funciones constructuras tiene el pamametro tea
    let vehiculo = {}
    vehiculo.motor = motor;
    vehiculo.color = color;
    vehiculo.velocidad = velocidad;
    vehiculo.nombre = nombre;
    return vehiculo;
} */
let arreglo = [];
function Vehiculo(motor, color, velocidad, nombre) {
  // las funciones constructuras tiene el pamametro tea
  let vehiculo = {};
  this.motor = motor;
  this.color = color;
  this.velocidad = velocidad;
  this.nombre = nombre;
}
function extra() {
  let nombra = "honda";
  return nombra;
}

function normal() {
  let civiv = new Vehiculo(150, "rojo", 120, extra());
  console.log(civiv);
  arreglo.push(civiv);
  let bocho = new Vehiculo(150, "rojo", 120, "bochido");
  console.log(bocho);
  arreglo.push(bocho);

  let tsuru = new Vehiculo(200, "negro", 200, "tsuru tuneado");
  console.log(tsuru);
  arreglo.push(tsuru);

  console.log("----");
}

normal();
