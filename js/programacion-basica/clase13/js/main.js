

function getInfoApi(){
    console.log("dentro de getpoke");
    var busqueda = document.getElementById('busca').value;
    console.log(busqueda);
    fetch('https://pixabay.com/api/?key=27632732-4037d00b1347bb018a636cb50&q='+busqueda+ '&image_type=photo')
    .then(response => response.json())
    .then(data => crearCards(data))
}

function crearCards(resultado){
    console.log("creacion");
     console.log(resultado); 
     var container = document.getElementsByTagName('main')[0];
     var element = document.createElement('div');

     for (let i = 0; i < 10; i++) {

        element.innerHTML = `
     <div class="contImg"> <img src="${resultado.hits[i].largeImageURL} "> </div>
     <div class="info"> 
     ID <span> : ${resultado.hits[i].id} </span> -Usuario: <span>${resultado.hits[i].user} </span> 
         
     </div>    
     `;
 
      container.appendChild(element); 
       
    }

    




 }

   
 


/* var idPokemon = 1;
var items = 20;

function initPokemons(){
    for (let index = 1; index <= items; index++) {
        getPokemon();  
        idPokemon++;     
    }
}

function getPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/' + idPokemon)
    .then(response => response.json())
    .then(data => crearPokemon(data))
}




     var container = document.getElementsByTagName('main')[0];
   
     for (let i = 0; i < 10; i++) {

        element.innerHTML = `
     <div class="contImg"> <img src="${resultado.hits[i].largeImageURL} "> </div>
     <div class="info"> 
     ID <span> : ${resultado.hits[i].id} </span> -Usuario: <span>${resultado.hits[i].user} </span> 
         
     </div>    
     `;
 
      container.appendChild(element); 
       
    }
      
 }



























function crearPokemon(perro){
    /* console.log(perro); 

    var container = document.getElementsByTagName('main')[0];
    var element = document.createElement('div');
    element.innerHTML = `
    <div class="contImg"> <img src="${perro.sprites.front_default} "> </div>
    <div class="info"> 
        <span> ${perro.id} </span>- ${perro.name}
        <div class="type"> ${perro.types[0].type.name} </div>
    </div>    
    `;

    container.appendChild(element);
} */