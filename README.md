![Buscador de cócteles](https://raw.githubusercontent.com/raquelgm88/cocktail-finder/main/src/images/header-readme.png)

# Buscador de cócteles y bebidas de todo el mundo

¡Hola! Esta aplicación web es el resultado del ejercicio de evaluación final del módulo dos del **Bootcamp de Programación Web** de **Adalab**, de la promoción **Salas**.

## Cómo funciona la aplicación

### Estructura

Al entrar en la aplicación tenemos un formulario para buscar bebidas. Debajo de él hay dos columnas:

- La de la derecha muestra por defecto el listado de todas las bebidas que contengan la palabra "margarita" siempre que entremos en la aplicación, y cada vez que recarguemos la página.
- La de la izquierda muestra el listado de los cócteles favoritos, y un botón debajo para borrar ese listado.

### Búsqueda

En la barra de búsqueda podemos escribir el nombre de una bebida o parte de la palabra que esté contenida dentro del nombre de la bebida que queremos buscar. Para que se produzca esa búsqueda debemos hacer click en el botón **"Buscar"**. Una vez clickado el boton, aparece el listado a la derecha de todas las bebidas que cumplan los requisitos de la búsqueda. La información que se muestra de cada bebida es su foto y su nombre.

Si quieremos buscar otra bebida podemos clickar en el botón **"Reset"** para borrar el campo de búsqueda, o directamente borrar de forma manual lo que tengamos escrito y realizar una nueva búsqueda.

### Guardar en "Cócteles Favoritos"

Si queremos guardar esa bebida en nuestra lista de favoritos, clickaremos sobre su tarjeta y aparecerá duplicada en la columna de la izquerda. Entonces, la tarjeta de la bebida invertirá sus colores en la lista de búsqueda para que sepamos que la hemos añadido a **"Cócteles Favoritos"**.

Todos los cócteles que añadimos a favoritos se quedan guardados en el **localStorage**, por lo que si volvemos a cargar la página siempre aparecerán.

### Borrar de la lista de favoritos

Para borrar uno a uno podemos hacerlo de dos formas:

1. Haciendo click en el icono **"x"** que está situado arriba a la izquierda de cada tarjeta de favoritos.
2. Haciendo click sobre la tarjeta de la lista de búsqueda que queramos eliminar de favoritos.

En ambos casos, una vez desaparezca una bebida de **"Cócteles Favoritos"**, en el listado de la derecha volverá a tener su color original.

Si queremos borrar todos a la vez, haremos click en el botón **"Borrar Favoritos"**.

## Herramientas utilizadas

- HTML5
- CSS3, SCSS
- JavaScript
- NodeJS
- Gulp
- Git
- API: https://www.thecocktaildb.com/api.php

## Cómo arrancar el proyecto

Necesitas tener instalado [Node JS](https://nodejs.org/en) para poder arrancar este proyecto.

1. Instala las dependecias locales ejecutando en la terminal el comando:

```
npm install
```

2. Instala el paquete para SASS:

```
npm install node-sass
```

3. Arranca el proyecto ejecutando a continuación en la terminal:

```
npm start
```

Se abrirá [http://localhost:3000 ](http://localhost:3000)para ver el proyecto en el navegador en modo desarrollo.
