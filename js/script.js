let numberOfFilms = +prompt('сколько фильмов ви уже просмотрели?', '');

const dataBase = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false

};



const a = prompt('один из последних просмотрених фильмов', ''),
   b = prompt('на сколько оцените его', '');
dataBase.movies[a] = b;
console.log(dataBase)
