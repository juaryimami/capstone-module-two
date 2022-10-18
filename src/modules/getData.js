const dataURL = 'https://api.tvmaze.com/search/shows?q=spiderman';
// eslint-disable-next-line import/prefer-default-export
export const getComics = async () => {
  const response = await fetch(dataURL);
  const comics = await response.json();
  return comics;
};