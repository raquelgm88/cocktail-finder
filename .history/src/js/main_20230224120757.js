'use strict';

console.log('>> Ready :)');


//VARIABLES
const search = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const cocktailList = document.querySelector('.js__list');
const fav = document.querySelector('.js__favourites');



//FUNCIONES



function getCocktails() {
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => (cocktailList.innerHTML = data.result));
}


//Función click botón "Buscar"
function handleClickButton(event) {
    event.preventDefault();
    const searchValue = search.value;
   // console.log(searchValue);
   getCocktails();
   console.log(getCocktails);
}


//EVENTOS

//Evento sobre el botón "Buscar"
button.addEventListener('click', handleClickButton);