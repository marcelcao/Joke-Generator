// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import renderToDom from './renderToDOM';
import { getJokeSetup, getJokeDelivery } from '../api/promises';

const title = () => {
  const domString = `<div class="generator-title"><h1>Programming Joke Generator</h1>
  </div>`;
  renderToDom('#generatorTitle', domString);
};
title();

const jokeBtn = () => {
  const btnString = `<button class="btn btn-danger" 
  id="getNewJoke">New Joke</button>`;
  renderToDom('#btnContainer', btnString);
};

const punchLineBtn = () => {
  const btnString = `<button class="btn btn-danger" 
  id="getPunchline">Get Punchline</button>`;
  renderToDom('#btnContainer', btnString);
};

const renderJokeSetup = () => {
  getJokeSetup().then((response) => {
    const domString = `<h2>${response}</h2>`;
    punchLineBtn();
    renderToDom('#app', domString);
  });
};

const renderJokeDelivery = () => {
  getJokeDelivery().then((response) => {
    const domString = `<h2>${response}</h2>`;
    jokeBtn();
    renderToDom('#app', domString);
  });
};

const init = () => {
  const jokeStart = () => {
    const domString = `<button class="btn btn-danger" id="getJoke">Get Joke</button>
    </div>`;
    renderToDom('#btnContainer', domString);
  };
  jokeStart();
};
init();

document.querySelector('#btnContainer').addEventListener('click', (e) => {
  e.preventDefault();
  switch (e.target.id) {
    case 'getJoke':
      renderJokeSetup();
      break;
    case 'getPunchline':
      renderJokeDelivery();
      break;
    case 'getNewJoke':
      renderJokeSetup();
      break;
    default:
      break;
  }
});
