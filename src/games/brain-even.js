import createGame from '../createGame';
import getRandomNumber from '../utils';

const minNumber = 1;
const maxNumber = 100;
const yes = 'yes';
const no = 'no';

const isEven = number => number % 2 === 0;

export default () => {
  const generateData = () => {
    const number = getRandomNumber(minNumber, maxNumber);

    return {
      question: number,
      correctAnswer: isEven(number) ? yes : no,
    };
  };

  return createGame({
    name: `Answer "${yes}" if number even otherwise answer "${no}".`,
    generateData,
  });
};
