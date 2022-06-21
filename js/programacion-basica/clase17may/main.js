function clickEv(event){
    console.log(event);
    event.target.style.backgroundColor= "pink";
    if(event.target.nodeName== 'span'){
        event.target.parentElement.style.backgroundColor="black";
    }
    /* if (event.altKey){
        console.log("esta activado");
    }
    if(event.altKey &&  event.ctrlKey){
        console.log( " funcion especial de alt+ ctrl+ shift");
    } */
}

function doble(event){
    console.log(event);
    event.target.style.backgroundColor="blue";
}
function der(event){
    console.log("submenu: ");
    event.preventDefault();
}

function drag(){
    console.log("dragend");
}

function drag2(){
    console.log("dragstart");
}

/* function drag3(){
    console.log("draaags");
} */

function over(event){
    console.log(event);
    console.log("dragover");
}
function drop(event){
    console.log("droppp");
    event.preventDefault;
}

