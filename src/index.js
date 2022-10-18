import './style.css';
import { createGrid } from './modules/createGride.js';
import { getComics } from './modules/getData.js';
import { getDataLocalStorage, setDataLocalStorage } from './modules/store.js';

window.addEventListener('load', () => {
  getComics().then((result) => {
    result.splice(7, 1);
    setDataLocalStorage(result);
  });
  const mainGrid = getDataLocalStorage();
  createGrid(mainGrid);
});