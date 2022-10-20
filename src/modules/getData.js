import { createGrid } from './createGride.js';
import { dataURL } from './constants.js';
import { setDataLocalStorage } from './store.js';

const getComics = async () => {
  const response = await fetch(dataURL);
  const comics = await response.json();
  return comics;
};

// eslint-disable-next-line import/prefer-default-export
export const getData = () => {
  getComics().then((result) => {
    result.splice(7, 1);
    setDataLocalStorage(result);
    createGrid(result);
  });
};
