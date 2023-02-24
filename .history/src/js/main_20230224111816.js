'use strict';

console.log('>> Ready :)');


//VARIABLES
const search = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const cocktailList = document.querySelector('.js__list');
const fav = document.querySelector('.js__favourites');



//FUNCIONES
function handleClickButton(event) {
    event.preventDefault();
}




//EVENTOS

//Evento sobre el botón "Buscar"
button.addEventListener('click', handleClickButton);