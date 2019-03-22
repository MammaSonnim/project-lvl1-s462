import createGame from '../createGame';
import utils from '../utils';

const { getRandomNumber } = utils;

const description = 'Answer "yes" if number even otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const isEven = number => number % 2 === 0;

export default () => {
  const generateData = () => {
    const question = getRandomNumber(minNumber, maxNumber);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return {
      question,
      correctAnswer,
    };
  };

  createGame(description, generateData);
};
