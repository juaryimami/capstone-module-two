import { getData } from './modules/getData.js';
import { sendLikes, getListLikesAPI } from './modules/like.js';
import './style.css';

const container = document.querySelector('.container');

window.addEventListener('load', () => {
  getData();
  getListLikesAPI();
});

container.addEventListener('click', (e) => {
  sendLikes(e);
});
