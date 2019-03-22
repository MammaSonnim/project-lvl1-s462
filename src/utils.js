const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

const utils = {
  getRandomNumber,
  getRandomItem,
};

export default utils;
