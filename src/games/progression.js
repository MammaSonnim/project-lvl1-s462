import launchGame from '../game-launcher';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 5;
const progressionLength = 10;

const getProgression = (start, step, length) => {
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

const generateData = () => {
  const start = getRandomNumber(minNumber, maxNumber);
  const step = getRandomNumber(minNumber, maxNumber);
  const progression = getProgression(start, step, progressionLength);
  const missedIndex = getRandomNumber(0, progressionLength - 1);

  const question = getCensoredSequence(progression, missedIndex);
  const correctAnswer = String(progression[missedIndex]);

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(description, generateData);
};
