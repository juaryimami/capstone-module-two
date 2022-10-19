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
