'use strict';

console.log('>> Ready :)');


//VARIABLES
const search = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const cocktailList = document.querySelector('.js__list');
const fav = document.querySelector('.js__favourites');
let cocktails = [];



//FUNCIONES


//Función para obtener los datos de la API
function getCocktails(searchValue) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      cocktails = data.drinks.map((drink)=>({
        name: drink.strDrink,
        image: drink.strImageSource
      }) );
    });
}


//Función click botón "Buscar"
function handleClickButton(event) {
  event.preventDefault();
  const searchValue = search.value;
  getCocktails(searchValue);
}


//EVENTOS

//Evento sobre el botón "Buscar"
button.addEventListener('click', handleClickButton);