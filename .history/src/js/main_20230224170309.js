'use strict';

console.log('>> Ready :)');


//VARIABLES
const search = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const cocktailList = document.querySelector('.js__ul_list');
const fav = document.querySelector('.js__favourites');
let cocktails = [];



//FUNCIONES


//Función para obtener los datos de la API
function getCocktails() {
  const searchValue = search.value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      cocktails = data.drinks.map((drink)=>({
        name: drink.strDrink,
        image: drink.strImageSource
      }) );
      for (let i=0; i<cocktails.length; i++) {
        if (cocktails[i].image === null) {
          cocktails[i].image = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
        }
      }
      renderCocktails();
      console.log(renderCocktails);
  
    });
}

//Función para pintar los cócteles en el HTML
function renderCocktails (){
    cocktailList.innerHTML = '';
    for (const eachCocktail of cocktails) {
        cocktailList.innerHTML += `<li class="js__list_item"><img class="js__img" src="${eachCocktail.image}/>${eachCocktail.name}</li>`;
    }
}



//Función click botón "Buscar"
function handleClickButton(event) {
  event.preventDefault();
  getCocktails();
  
}


//EVENTOS

//Evento sobre el botón "Buscar"
button.addEventListener('click', handleClickButton);