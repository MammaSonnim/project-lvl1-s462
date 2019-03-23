import launchGame from '../game-launcher';
import utils from '../utils';

const { getRandomNumber } = utils;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 5;
const maxNumber = 48;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (!(num % i)) {
      return false;
    }
  }

  return true;
};

export default () => {
  const generateData = () => {
    const question = getRandomNumber(minNumber, maxNumber);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    return {
      question,
      correctAnswer,
    };
  };

  launchGame(description, generateData);
};
