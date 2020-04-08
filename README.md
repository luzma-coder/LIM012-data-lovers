# Data Lovers - Pokemon Go

## Índice

* [1. Definición del proyecto](#1-definicion-del-proyecto)
* [2. Objetivos del Proyecto](#2-objetivos-del-proyecto)
* [3. Usuario](#3-usuario)
* [3.1. Historias de usuario](#31-Historias-de-usuario)
* [3.2. Diseño de la Interfaz de Usuario](#32-Diseño-de-la-Interfaz-de-Usuario)
* [3.2.1. Prototipo de baja fidelidad](#321-Prototipo-de-baja-fidelidad)
* [3.2.2. Prototipo de alta fidelidad](#322-Prototipo-de-alta-fidelidad)
* [3.2.3. Proyecto Final](#323-Proyecto-Final)
* [4. Testeos de usabilidad](#4-testeos-de-usabilidad)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)

***
## 1. Definición del proyecto
"PokeAmigos" es un sitio web muy interactivo y facil de usar. Aqui podran encontrar un detalle general de todo los pokemons y tambien la informacion de cada uno de ellos.
Se puede encontrar mas rapido un pokemon buscando por su nombre, filtrando por su tipo, egg x Km y region (puede aplicar los 3 filtros juntos) y tambien puede ordenar ascendente y desendente de acuerdo a su nombre y numero de pokedex.

## 2. Objetivos del Proyecto
El sitio web ayudara al usuario a tener la información más rápida y precisa.
Tener la informacion de 251 pokemones con sus respectivas Evoluciones de cada pokemon y otros datos como: su descripcion, region, tamaño, peso, vulnerabilidades, resistencias, estados y movimientos. 

## 3. Usuario
Todas las personas que juegue Pokémon GO que desee información adicional sobre algun pokemon.
Nuestr@s principales usuari@s son personas que tienen poco tiempo coleccionando o evolucionando pokemons. Y desean ampliar la cantidad de pokemons en su pokedex.

### Necesidad del Usuario

Los usuari@s deseean ver la informacion sobra captura y evolución de los pokemons.
Utilizarian el producto antes de salir a capturar pokemons, como una estrategia para decidir que pokemon buscar o capturar.

### 3.1 Historias de usuario

#### Historia 1: Mostrar todos los pokemons
* YO como jugador de Pokemon Go
* QUIERO ver la imagen, el numero, nombre y elementos de todos los pokemones
* PARA poder acceder a toda la información de un determinado pokemon.

#### Historia 2: Mostrar detalle Pokemon
* YO como jugador de Pokemon Go
* QUIERO acceder a un determinado pokemon haciendo click sobre la imagen
* PARA poder ver la información detallada del pokemon (tipos, evoluciones, datos para captura, descripción, vulnerabilidades, movimientos, etc )

#### Historia 3: Filtrar x type
* YO como jugador Pokemon Go
* QUIERO filtrar los pokemones por "tipo"
* PARA poder ver la lista de un determinado tipo de pokemones

#### Historia 4: Buscar por nombre
* YO como jugador Pokemon Go
* QUIERO buscar por nombre de pokemon
* PARA poder hacer click y acceder a la información general del pokemon.

#### Historia 5: Filtrar por generacion
* YO como jugador Pokemon Go
* QUIERO filtrar los pokemones por "generacion"
* PARA poder ver la lista de un determinado generacion de pokemones

#### Historia 6: Filtrar por huevo
* YO como jugador Pokemon Go
* QUIERO filtrar los pokemones por "huevo"
* PARA poder ver la lista de un determinado tipo de huevo de pokemones

#### Historia 8: Ordenar pokemons mostrados
* YO como jugador de Pokemon Go
* QUIERO tener la opción de ordenar por nombres
* PARA verlos de forma ascendente y descendente

[Tablero en Trello](https://trello.com/b/TV3RTz0K/data-lovers) 

### 3.2 Diseño de la Interfaz de Usuario

#### 3.2.1 Prototipo de baja fidelidad: 

#### Primera Historia
![desktop](/src/screen/p1.jpg) ![responsive](/src/screen/r1.jpg)

##### Segunda Historia
![desktop](/src/screen/p2.jpeg) ![responsive](/src/screen/r2.jpg)

#### 3.2.2 Prototipo de alta fidelidad

Primera Historia
![desktop](/src/screen/FIGMA-DESKTOP-H1.PNG)
![responsive](/src/screen/FIGMA-MOBIL-H1.PNG)

Segunda Historia
![desktop](/src/screen/FIGMA-DESKTOP-DATOS.PNG)
![responsive](/src/screen/FIGMA-MOBIL-DATOS.PNG)

#### 3.2.3 Proyecto Final

##### Primera Historia
![desktop](/src/screen/DESKTOP-FINAL.PNG)
![responsive](/src/screen/MOBILE-FINAL.PNG)

##### Segunda Historia

###### Desktop

![desktop](/src/screen/DESKTOP-DETALLE1-FINAL.PNG)

![desktop](/src/screen/DESKTOP-DETALLE2-FINAL.PNG)

![desktop](/src/screen/DESKTOP-DETALLE3-FINAL.PNG)

![desktop](/src/screen/DESKTOP-DETALLE4-FINAL.PNG)

###### Responsive
![responsive](/src/screen/MOBILE-DETALLE1-FINAL.PNG) ![responsive](/src/screen/MOBILE-DETALLE2-FINAL.PNG) ![responsive](/src/screen/MOBILE-DETALLE3-FINAL.PNG)

![responsive](/src/screen/MOBILE-DETALLE4-FINAL.PNG) ![responsive](/src/screen/MOBILE-DETALLE5-FINAL.PNG) ![responsive](/src/screen/MOBILE-DETALLE6-FINAL.PNG)

## 4. Testeos de usabilidad

* Primer testeo Testeo realizado a 3 posibles usuarios con el prototipo mínimo viable

### Objetivos de testeo:

Probar la usabilidad de los filtros de la aplicación.
Probar usabilidad de la herramienta “Buscar”.
Ver si esta satistech@ con la información de cada pokemon.
Probar interfaz para acceder a la información de un determinado Pokémon.
Evaluar la importancia del contenido de la información de cada Pokémon.

### Caso a estudiar 1

Contexto: Estas recien empezando en el mundo de Pokemon Go, y quieres saber mas un pokemon; pero no recuerdas su nombre; solo sabes de que region y el tipo que es dicho pokemon.
Pregunta: ¿Cómo lo harías para buscar información sobre un pokemon en especifico si solo recuerdas el tipo de pokemon y de la region que es?.

### Caso a estudiar 2

Contexto: Estas recien empezando en el mundo de Pokemon Go, y quieres saber mas un pokemon; pero no recuerdas su nombre; ni su tipo, pero sabes su numero de pokedex y es uno de los ultimos.
Pregunta: ¿Cómo lo harías para encontrar mas rapido la información sobre un pokemon en especifico si solo recuerdas el su numero de pokedex?

### Caso a estudiar 3

Contexto: Esta buscando la informacion de un pokemon y obre todo saber sus evoluciones.
Pregunta: ¿Cómo lo harías para buscar más rapido la información sobre un pokemon en específico y que informacion crees que es relevante para ti?

### Conclusiones del testeo

* La descripción de un filtro no se entiende de que trata.
* Que el buscar no se encuentre junto a os filtros
* Que las evoluciones estén bien detalladas y en orden.
* Que se vea la información de movimientos

### Posibles soluciones

* Cambiar la descripcion de dicho filtro (mas comprensible para el usuari@).
* Subir el buscar a la parte del header.
* Dar prioridad a las evoluciones y pre-evoluciones de los Pokémon.
* Añadir la información de movimientos.

## 5. Objetivos de aprendizaje

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener _feedback_ e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [x] Planear y ejecutar _tests_ de usabilidad.

### HTML y CSS

- [x] Entender y reconocer por qué es importante el HTML semántico.
- [x] Identificar y entender tipos de selectores en CSS.
- [x] Entender como funciona `flexbox` en CSS.
- [x] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM

- [x] Entender y reconocer los selectores del DOM (`querySelector` | `querySelectorAll`)
- [x] Manejar eventos del DOM. (`addEventListener`)
- [x] Manipular dinámicamente el DOM. (`createElement`, `appendchild`, `innerHTML`, `value`)

### Javascript

- [x] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [x] Manipular objects (key | value).
- [x] Entender el uso de condicionales (`if-else` | `switch`).
- [x] Entender el uso de bucles (`for` | `forEach`).
- [x] Entender la diferencia entre expression y statements.
- [x] Utilizar funciones (`parámetros` | `argumentos` | `valor de retorno`).
- [x] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [x] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [x] Testear funciones (funciones puras).

### Git y GitHub
- [x] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [x] Utilizar los repositorios de GitHub (`clone` | `fork` | `gh-pages`).
- [x] Colaborar en Github (`pull requests`).

### Buenas prácticas de desarrollo
- [x] Organizar y dividir el código en módulos (Modularización).
- [x] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [x] Utilizar linter para seguir buenas prácticas (ESLINT).

