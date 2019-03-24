import launchGame from '../game-launcher';
import getRandomNumber from '../utils';

const description = 'What is the result of the expression?';
const minNumber = 2;
const maxNumber = 20;
const operators = ['+', '-', '*'];
const oerations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomItem = array => array[getRandomNumber(0, array.length - 1)];

const generateData = () => {
  const firstArg = getRandomNumber(minNumber, maxNumber);
  const secondArg = getRandomNumber(minNumber, maxNumber);
  const operator = getRandomItem(operators);

  const question = `${firstArg} ${operator} ${secondArg}`;
  const correctAnswer = String(oerations[operator](firstArg, secondArg));

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(description, generateData);
};
