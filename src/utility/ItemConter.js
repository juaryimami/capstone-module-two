const itemCounter = () => {
  const items = [...document.querySelector('.container').children];
  return items.length;
};

module.exports = itemCounter;
