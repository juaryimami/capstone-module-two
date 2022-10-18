import { getData } from './modules/getData.js';
import { sendLikes } from './modules/like.js';
import { fillPopUp, closePopUp } from './modules/popUp.js';
import './style.scss';

const container = document.querySelector('.container');
const close = document.querySelector('.close');

window.addEventListener('load', () => {
  getData();
});

container.addEventListener('click', (e) => {
  fillPopUp(e);
  sendLikes(e);
});

close.addEventListener('click', closePopUp);