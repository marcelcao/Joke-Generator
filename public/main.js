// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import renderToDom from './renderToDOM';

const splashImg = () => {
  const imgString = `
  <i="https://media.cybernews.com/images/featured/2021/02/qw2ja4h83fz41.jpg">`;
  renderToDom('#splashImage', imgString);
};
splashImg();

const title = () => {
  const domString = `
  <div class="generator-title"><h1>Programming Joke Generator</h1>
  </div>`;
  renderToDom('#generatorTitle', domString);
};
title();

// joke logic //

const joke = [];
// this array function holds the entirety of one joke //

// the next variables is the promise for the data //
const jokeAPI = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';

const getJoke = () => new Promise((resolve, reject) => {
  fetch(jokeAPI, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// joke buttons //

const newJokeBtn = () => {
  const btnString = `<button class="btn btn-danger" 
  id="getNewJoke">New Joke</button>`;
  renderToDom('#btnContainer', btnString);
};

const punchLineBtn = () => {
  const btnString = `<button class="btn btn-danger" 
  id="getPunchline">Get Punchline</button>`;
  renderToDom('#btnContainer', btnString);
};

// render jokes to dom //

const renderJokeSetup = (obj) => {
  joke.push(obj);
  let domString = '';
  if (obj.setup) {
    domString += `<h2>${obj.setup}</h2>`;
    renderToDom('#app', domString);
    punchLineBtn();
  } else {
    domString += `<h2>${obj.joke}</h2>`;
    renderToDom('#app', domString);
    joke.length = 0;
    newJokeBtn();
  }
};

const renderJokeDelivery = () => {
  let domString = '';
  domString += `<h2>${joke[0].setup}</h2><h2>${joke[0].delivery}</h2>`;
  renderToDom('#app', domString);
  newJokeBtn();
  joke.length = 0;
};

// initialize //

const init = () => {
  const jokeStart = () => {
    const domString = `<button class="btn btn-danger" id="getJoke">Get Joke</button>
    </div>`;
    renderToDom('#btnContainer', domString);
  };
  jokeStart();
};
init();

// event listener //

document.querySelector('#btnContainer').addEventListener('click', (e) => {
  e.preventDefault();
  switch (e.target.id) {
    case 'getJoke':
      getJoke().then((value) => renderJokeSetup(value));
      break;
    case 'getPunchline':
      renderJokeDelivery();
      break;
    case 'getNewJoke':
      getJoke().then((value) => renderJokeSetup(value));
      break;
    default:
      break;
  }
});
