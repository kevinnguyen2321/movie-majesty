import { generateMoviesHTML } from './movie-converter.js';
import { renderMoviesToDOM } from './movie-render.js';

const movieHTML = generateMoviesHTML();

renderMoviesToDOM(movieHTML);

const movieList = document.getElementById('movie-list');
console.log(movieList);
