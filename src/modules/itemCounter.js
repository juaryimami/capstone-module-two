const itemCounter = () => {
  const items = [...document.querySelector('.container').children];
  return items.length;
};

// eslint-disable-next-line import/prefer-default-export
export const addCounter = () => {
  const counterDOM = document.querySelector('.items-counter');
  counterDOM.innerHTML = `<b>(${itemCounter()})<b>`;
};