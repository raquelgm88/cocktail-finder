'use strict';

const search = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const reset = document.querySelector('.js__reset');
const cocktailList = document.querySelector('.js__ul_list');
const fav = document.querySelector('.js__ul_fav');
const deleteButton = document.querySelector('.js__delete_button');
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


//Función para pintar los cócteles en el HTML según si están en favoritos o no
function renderCocktails () {
  cocktailList.innerHTML = '';
  let listClass = '';

  for (const eachCocktail of cocktails) {
    const isFav = favCocktails.find(favCocktail => favCocktail.id===eachCocktail.id);

    if (isFav) {
      listClass = 'inverted_colors';
    } else {
      listClass = 'js__list_item';
    }
    cocktailList.innerHTML += `<li class="${listClass}" id=${eachCocktail.id}>
<img class="js__img" src="${eachCocktail.image}" />${eachCocktail.name}</li>`;
  }
}

//Función para pintar los favoritos en el HTML y añado el evento de clicar sobre las "x" para borrar
function renderFavCocktails () {
  fav.innerHTML = '';

  for (const eachFav of favCocktails) {
    fav.innerHTML += `<img class="js__delete" id=${eachFav.id} src="./assets/images/eliminar.png" alt="" /><li class="js__list_item" id=${eachFav.id}>
    <img class="js__img" src="${eachFav.image}" />${eachFav.name}</li>`;
  }

  addEventToX();
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



//Función click en cóctel para añadir a favoritos
function handleClickCard(event) {
  event.preventDefault();
  //Variable donde almaceno los id de las tarjetas donde sucede el evento(click)
  const id = event.currentTarget.id;
  //Uso find porque me devuelve el primer elemento que cumple la concidión de que cada cóctel tenga el mismo id que el curren target
  const favCard = cocktails.find(eachCocktail => eachCocktail.id===id);

  //Uso findIndex para ver las posiciones donde están los cócteles. Si es -1, no está en mi lista de favoritos
  const indexCocktail = favCocktails.findIndex(eachCocktail => eachCocktail.id===id);

  //Compruebo si ya existe el cóctel en favoritos
  //si el index no está, añado el cóctel a favoritos
  if(indexCocktail === -1) {
    favCocktails.push(favCard);
    localStorage.setItem('favorites', JSON.stringify(favCocktails));
    const idSelected = document.getElementById(event.currentTarget.id);
    idSelected.classList.remove('js__list_item');
    idSelected.classList.add('inverted_colors');
  } else {
    favCocktails.splice(indexCocktail, 1);
    const idSelected = document.getElementById(event.currentTarget.id);
    idSelected.classList.remove('inverted_colors');
    idSelected.classList.add('js__list_item');
  }

  renderFavCocktails();
}



//Función de evento sobre cóctel
function addEventToCard() {
  //Creo dos variables en las que selecciono todos los elementos con esas dos clases
  const cards = document.querySelectorAll('.js__list_item');
  const cardsSelected = document.querySelectorAll('.inverted_colors');
  //Hago un bucle para llamar al evento sobre cada uno de los elementos sobre los que hago click
  for (const eachCard of cards) {
    eachCard.addEventListener('click', handleClickCard);
  }
  for (const eachCard of cardsSelected) {
    eachCard.addEventListener('click', handleClickCard);
  }
}


//Función de evento sobre las "x" de favoritos
function addEventToX() {
  //Creo una variable donde selecciono todos los elementos con esa clase
  const deleteIcon = document.querySelectorAll('.js__delete');
  //Hago un bucle para llamar al evento sobre cada uno de los iconos "x" sobre los que hago click
  for (const eachDeleteIcon of deleteIcon) {
    eachDeleteIcon.addEventListener('click', handleClickDelete);
  }
}

//Función del evento reset
function handleClickReset(event) {
  event.preventDefault();
  search.value = '';
  getCocktails();
}

//Función para cambiar las clases
function toggleClass (id) {
  const idSelected = document.getElementById(id);
  idSelected.classList.remove('inverted_colors');
  idSelected.classList.add('js__list_item');
}

//Función sobre el evento de borrar favoritos: de uno en uno o todos a la vez
function handleClickDelete(event){
  event.preventDefault();
  //El id del current target es el de la "x" que tiene asignado, cuyo id = al de cada cóctel
  //EL id del current target del botón "borrar favoritos" no existe
  const id = event.currentTarget.id;

  if (id) {
    const deleteFavs = favCocktails.findIndex(eachCocktail => eachCocktail.id===id);
    favCocktails.splice(deleteFavs, 1);
    toggleClass(id);
  } else {

    for (const cocktail of favCocktails) {
      toggleClass(cocktail.id);
    }

    favCocktails = [];

  }
  localStorage.setItem('favorites', JSON.stringify(favCocktails));
  renderFavCocktails();

}

//Evento sobre el botón "Buscar"
button.addEventListener('click', handleClickButton);

//Evento sobre el botón "Reset"
reset.addEventListener('click', handleClickReset);

//Evento sobre el botón "Borrar favoritos"
deleteButton.addEventListener('click', handleClickDelete);