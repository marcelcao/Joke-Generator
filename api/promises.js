const jokeAPI = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';

const getJokeSetup = () => new Promise((resolve, reject) => {
  fetch(jokeAPI, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data.setup))
    .catch(reject);
});

const getJokeDelivery = () => new Promise((resolve, reject) => {
  fetch(jokeAPI, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data.delivery))
    .catch(reject);
});

export {
  getJokeSetup, getJokeDelivery
};
