'use strict';

const search = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const reset = document.querySelector('.js__reset');
const cocktailList = document.querySelector('.js__ul_list');
const fav = document.querySelector('.js__ul_fav');
let cocktails = [];
let favCocktails = [];


//Función para ver si hay datos en el localStorage y pintarlos
function checkLocalStorage() {
  const infoStorage = JSON.parse(localStorage.getItem('favorites'));

  if (infoStorage) {
    favCocktails = infoStorage;
    renderFavCocktails();
  }

}

checkLocalStorage();
getCocktails();


//Función para pintar los cócteles en el HTML
function renderCocktails () {
  cocktailList.innerHTML = '';
  for (const eachCocktail of cocktails) {
    cocktailList.innerHTML += `<li class="js__list_item" id=${eachCocktail.id}>
<img class="js__img" src="${eachCocktail.image}" />${eachCocktail.name}</li>`;
  }
}

//Función para pintar los favoritos en el HTML
function renderFavCocktails () {
  fav.innerHTML = '';
  for (const eachFav of favCocktails) {
    fav.innerHTML += `<li class="js__list_item" id=${eachFav.id}>
    <img class="js__img" src="${eachFav.image}" />${eachFav.name}</li>`;
  }
}


//Función para obtener los datos de la API
function getCocktails() {
  let value = '';
  if (search.value === '') {
    value = 'margarita';
  } else {
    value = search.value;
  }

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
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
  //Variable donde almaceno los id de las tarjetas donde sucede el evento(click)
  const idSelected = event.currentTarget.id;
  //Uso find porque me devuelve el primer elemento que cumple la concidión
  const favCard = cocktails.find(eachCocktail => eachCocktail.id===idSelected);

  //Uso findIndex para ver las posiciones donde están los cócteles. Si es -1, no está en mi lista de favoritos
  const indexCocktail = favCocktails.findIndex(eachCocktail => eachCocktail.id===idSelected);

  //Compruebo si ya existe el cóctel en favoritos
  //si el index no está, añado el cóctel a favoritos
  if(indexCocktail === -1) {
    favCocktails.push(favCard);
    localStorage.setItem('favorites', JSON.stringify(favCocktails));
  }

  renderFavCocktails();
  

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

//Función del evento reset



//Evento sobre el botón "Buscar"
button.addEventListener('click', handleClickButton);

//Evento sobre el botón "Reset"
reset.addEventListener('click', handleClickReset);