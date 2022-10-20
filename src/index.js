import { getData } from './modules/getData.js';
import { sendLikes } from './modules/like.js';
import './style.css';

const container = document.querySelector('.container');

window.addEventListener('load', () => {
  getData();
});

container.addEventListener('click', (e) => {
  sendLikes(e);
});

// const addGame = async (url = '', data = {}) => {
//   const request = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
//   const response = request.text();
//   return response;
// };

// addGame(
//   'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
//   {
//     name: 'myNewApp',
//   }
// ).then((response) => console.log(response));
