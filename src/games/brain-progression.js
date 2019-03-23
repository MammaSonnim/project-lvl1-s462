import createGame from '../createGame';
import utils from '../utils';

const { getRandomNumber } = utils;

const description = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 5;
const countOfNumbers = 10;

const getArithmeticProgression = (start, step, count) => {
  const arr = [];
  let init = start;

  for (let i = 0; i < count; i += 1) {
    const next = init + step;

    arr.push(init);
    init = next;
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
    const arithmeticProgression = getArithmeticProgression(start, step, countOfNumbers);
    const missedIndex = getRandomNumber(0, countOfNumbers);

    const question = getCensoredSequence(arithmeticProgression, missedIndex);
    const correctAnswer = String(arithmeticProgression[missedIndex]);

    return {
      question,
      correctAnswer,
    };
  };

  createGame(description, generateData);
};
