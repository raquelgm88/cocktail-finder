'use strict';

console.log('>> Ready :)');


//VARIABLES
const search = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const cocktailList = document.querySelector('.js__list');
const fav = document.querySelector('.js__favourites');


console.log(searchValue);
let cocktails = [];



//FUNCIONES


//Función para obtener los datos de la API
function getCocktails() {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
        cocktails = data.drinks.map((drink)=>({
        name: drink.strDrink,
        image: drink.strImageSource
      }) );
      console.log(cocktails);
    });
}


//Función click botón "Buscar"
function handleClickButton(event) {
  event.preventDefault();
  const searchValue = search.value;
  getCocktails();
}


//EVENTOS

//Evento sobre el botón "Buscar"
button.addEventListener('click', handleClickButton);