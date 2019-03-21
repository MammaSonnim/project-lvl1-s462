import createGame from '../createGame';
import getRandomNumber from '../utils';

const minNumber = 1;
const maxNumber = 10;

const operators = [{
  sign: '+',
  calculation: (a, b) => a + b,
}, {
  sign: '-',
  calculation: (a, b) => a - b,
}, {
  sign: '*',
  calculation: (a, b) => a * b,
}];

const getRandomItem = array => Math.floor(Math.random() * array.length);
const getSign = selected => operators[selected].sign;

export default () => {
  const generateData = () => {
    const firstArg = getRandomNumber(minNumber, maxNumber);
    const secondArg = getRandomNumber(minNumber, maxNumber);
    const selected = getRandomItem(operators);
    const sign = getSign(selected);
    const resultOfCalc = operators[selected].calculation(firstArg, secondArg);

    return {
      question: `${firstArg} ${sign} ${secondArg}`,
      correctAnswer: String(resultOfCalc),
    };
  };

  return createGame({
    name: 'What is the result of the expression?',
    generateData,
  });
};
