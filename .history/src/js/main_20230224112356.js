'use strict';

console.log('>> Ready :)');


//VARIABLES
const search = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const cocktailList = document.querySelector('.js__list');
const fav = document.querySelector('.js__favourites');



//FUNCIONES

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then



//Función click botón "Buscar"
function handleClickButton(event) {
    event.preventDefault();
    const searchValue = search.value;
}


//EVENTOS

//Evento sobre el botón "Buscar"
button.addEventListener('click', handleClickButton);