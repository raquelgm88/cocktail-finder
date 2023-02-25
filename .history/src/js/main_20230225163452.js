'use strict';

const search = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const cocktailList = document.querySelector('.js__ul_list');
const fav = document.querySelector('.js__ul_fav');
let cocktails = [];
let favCocktails = [];


//Función para pintar los cócteles en el HTML
function renderCocktails () {
  cocktailList.innerHTML = '';
  for (const eachCocktail of cocktails) {
    cocktailList.innerHTML += `<li class="js__list_item favourites" id=${eachCocktail.id}>
<img class="js__img" src="${eachCocktail.image}" />${eachCocktail.name}</li>`;
  }
}

//Función para obtener los datos de la API
function getCocktails() {
  const searchValue = search.value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      cocktails = data.drinks.map((drink)=>({
        name: drink.strDrink,
        image: drink.strDrinkThumb,
        id: drink.idDrink
      }) );
      for (let i=0; i<cocktails.length; i++) {
        if (cocktails[i].image === null) {
          cocktails[i].image = 'https://via.placeholder.com/210x295/ffffff/666666/?text=Cocktail';
        }
      }
      renderCocktails();
      addEventToCard();
    });
}



//Función click botón "Buscar"
function handleClickButton(event) {
  event.preventDefault();
  getCocktails();

}

//Función click en cóctel
function handleClickCard(event) {
  event.preventDefault();
  console.log(event.currentTarget.id);
  //Variable donde almaceno los id de las tarjetas donde sucede el evento(click)
  const idSelected = event.currentTarget.id;
  //Uso find porque me devuelve el primer elemento que cumple la concidión
  const favCard = cocktails.find(eachCocktail => eachCocktail.id===idSelected)
}

//Función de evento sobre cóctel
function addEventToCard() {
  //Creo una variable en que selecciono todo los elementos con esa clase
  const cards = document.querySelectorAll('.js__list_item');
  //Hago un bucle para llamar al evento sobre cada uno de los elementos sobre los que hago click
  for (const eachCard of cards) {
    eachCard.addEventListener('click', handleClickCard);
  }
}


//Evento sobre el botón "Buscar"
button.addEventListener('click', handleClickButton);

//////////////////////////////////////////////////

const card = document.querySelector('.js__list_item');

