import launchGame from '../game-launcher';
import getRandomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 5;
const maxNumber = 48;

const getGreatestCommonDivisor = (x, y) => {
  if (y === 0) {
    return x;
  }

  return getGreatestCommonDivisor(y, x % y);
};

const generateData = () => {
  const firstArg = getRandomNumber(minNumber, maxNumber);
  const secondArg = getRandomNumber(minNumber, maxNumber);

  const question = `${firstArg} ${secondArg}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstArg, secondArg));

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(description, generateData);
};
