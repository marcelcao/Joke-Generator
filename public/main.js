// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { renderJokeSetup } from './renderJokes';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Mara's Joke Generator</h1>
    <button class="btn btn-danger" id="getJoke">Get Joke</button>`;

  document
    .querySelector('#getJoke')
    .addEventListener('click', () => renderJokeSetup());
};

init();
