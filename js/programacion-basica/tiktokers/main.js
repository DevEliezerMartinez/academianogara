const personajes = [{
        nombre: 'Daniel Enriquez',
        estrellas: 10,
        tipo: '[Bestia Divina]',
        info: 'Nacido para desarrollar, parace inofensivo pero te comera vivo si así lo desea..',
        atk: 1900,
        def: 1900,
        img: 'img/caress.png',

    },

    {
        nombre: 'Midudev',
        estrellas: 9,
        tipo: '[Bestia Divina]',
        info: 'El dios definitivo de JS mas de 10 años de experiencia..',
        atk: 1900,
        def: 1900,
        img: 'img/midu.jpeg',

    },

    {
        nombre: 'Paco Web',
        estrellas: 7,
        tipo: '[Brujo Tecnologico]',
        info: 'Sin dotes de buena vision pero un conocimiento eternoo..',
        atk: 1900,
        def: 1900,
        img: 'img/pacoweb.png',

    },

    {
        nombre: 'Arelis Reyes',
        estrellas: 7,
        tipo: '[dragon]',
        info: 'Alias Chica Python, aun estudiante pero es toda un AS de la programacion',
        atk: 3000,
        def: 2500,
        img: 'img/arelis.png',

    },

    {
        nombre: 'David Portilla',
        estrellas: 7,
        tipo: '[Mona China / Metal / Efect]',
        info: 'Alias el Frontend Mecatronico 💻 Frontend Developer / Ing. Mecatrónico',
        atk: 1900,
        def: 1900,
        img: 'img/david.png',

    },



    {
        nombre: 'Maeva Mazadiego',
        estrellas: 9,
        tipo: 'Diosa Divina',
        info: 'Egresada, actualmente en un Internship en Microsft',
        atk: 1500,
        def: 1200,
        img: 'img/maemaz.png',

    }


]
let contenedor = document.querySelector(".container")
creator = () => {

    for (let index = 0; index < personajes.length; index++) {
        //creamos la carta
        const carta = document.createElement("div");
        const atributo = document.createAttribute('class');
        atributo.value = ('card');



        carta.innerHTML = `<header class="title">
        <h2>${personajes[index].nombre}</h2>
        <img src="img/elemento.png" alt="">
    </header>

    <div class="stars">
    
        
        
    </div>

    <div class="profilePicture">
        <img src="${personajes[index].img}" alt="">
    </div>

    <article class="description">

        <p class="type">${personajes[index].tipo}</p>
        <span class="info">${personajes[index].info}</span>

        <div class="down">
            <div class="atributtes">
                <span>ATK/ ${personajes[index].atk}</span>
                <span> DEF /${personajes[index].def}</span>
            </div>
        </div>
    </article>`;
        carta.setAttributeNode(atributo)




        contenedor.appendChild(carta);



        for (let index2 = 0; index2 < personajes[index].estrellas; index2++) {
            let starImg = document.createElement("img");
            starImg.src = `img/star.png`;
            document.getElementsByClassName("stars")[index].appendChild(starImg)
        }
    }

    /* insertamos imagenes */









}

creator();