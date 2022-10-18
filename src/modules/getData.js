import { createGrid } from './createGride.js';

import { setDataLocalStorage } from './store.js';

const dataURL = 'https://api.tvmaze.com/search/shows?q=spiderman';
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
