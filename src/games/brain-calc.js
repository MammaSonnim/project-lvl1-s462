import createGame from '../createGame';
import utils from '../utils';

const { getRandomNumber } = utils;

const description = 'What is the result of the expression?';
const minNumber = 2;
const maxNumber = 20;
const operators = ['+', '-', '*'];
const calculations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

export default () => {
  const generateData = () => {
    const firstArg = getRandomNumber(minNumber, maxNumber);
    const secondArg = getRandomNumber(minNumber, maxNumber);
    const sign = getRandomItem(operators);

    const question = `${firstArg} ${sign} ${secondArg}`;
    const correctAnswer = String(calculations[sign](firstArg, secondArg));

    return {
      question,
      correctAnswer,
    };
  };

  createGame(description, generateData);
};
