import { getJokeSetup, getJokeDelivery } from '../api/promises';

const renderToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};

const renderJokeDelivery = () => {
  getJokeDelivery().then((response) => {
    const domString = `<h2>${response}</h2>`;
    renderToDom('#app', domString);
  });
};

const renderJokeSetup = () => {
  getJokeSetup().then((response) => {
    const domString = `<h2>${response}</h2><button class="btn btn-danger" id="getPunchline">Get Punchline</button>`;
    renderToDom('#app', domString);
    document
      .querySelector('#getPunchline')
      .addEventListener('click', () => renderJokeDelivery());
  });
};

export {
  renderJokeSetup, renderJokeDelivery
};
