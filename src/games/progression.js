import launchGame from '../game-launcher';
import utils from '../utils';

const { getRandomNumber } = utils;

const description = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 5;
const ApLength = 10;

const getArithmeticProgression = (start, step, length) => {
  const arr = [];

  for (let i = 1; i <= length; i += 1) {
    arr.push(start + step * i);
  }

  return arr;
};

const getCensoredSequence = (arr, missedIndex) => (
  arr.reduce((acc, item, i) => {
    const symbol = i === missedIndex ? '..' : item;

    return `${acc} ${symbol}`;
  }, '')
);

export default () => {
  const generateData = () => {
    const start = getRandomNumber(minNumber, maxNumber);
    const step = getRandomNumber(minNumber, maxNumber);
    const numbers = getArithmeticProgression(start, step, ApLength);
    const missedIndex = getRandomNumber(0, ApLength - 1);

    const question = getCensoredSequence(numbers, missedIndex);
    const correctAnswer = String(numbers[missedIndex]);

    return {
      question,
      correctAnswer,
    };
  };

  launchGame(description, generateData);
};
