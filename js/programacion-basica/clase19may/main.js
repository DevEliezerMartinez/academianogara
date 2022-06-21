console.log("holamundo");

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  .then((response) => response.json())
  .then((data) => pokemon(data));

function pokemon(data) {
  console.log(data);
  var container = document.getElementsByName("main")[0];
  var element = document.createElement("div");
  element.innerHTML = '<div class="contImg"> img src="${perro.sprites.front_default}"  </div>';
  container.appendChild(element);
}
