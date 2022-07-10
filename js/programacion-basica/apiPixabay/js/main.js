aux = 0;

function getInfoApi() {


    let busqueda = document.getElementById('busca').value;
    console.log(busqueda);
    fetch('https://pixabay.com/api/?key=27632732-4037d00b1347bb018a636cb50&q=' + busqueda + '&image_type=photo')
        .then(response => response.json())
        .then(data => crearCards(data))


}

function crearCards(resultado) {



    let container = document.getElementsByTagName('main')[0];

    aux++;
    let classe = document.createAttribute("class");
    classe.value = "card";
    container.setAttributeNode(classe)


    for (let i = 0; i < resultado.hits.length; i++) {
        let element = document.createElement('section');

        element.innerHTML = `
     <div class="contImg"> <img src="${resultado.hits[i].previewURL} "> </div>
     <div class="info"> 
     ID <span> : ${resultado.hits[i].id} </span> -Usuario: <span>${resultado.hits[i].user} </span> 
         
     </div>    
     `;

        container.appendChild(element);

    }






}





/* let idPokemon = 1;
let items = 20;

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




     let container = document.getElementsByTagName('main')[0];
   
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

    let container = document.getElementsByTagName('main')[0];
    let element = document.createElement('div');
    element.innerHTML = `
    <div class="contImg"> <img src="${perro.sprites.front_default} "> </div>
    <div class="info"> 
        <span> ${perro.id} </span>- ${perro.name}
        <div class="type"> ${perro.types[0].type.name} </div>
    </div>    
    `;

    container.appendChild(element);
} */