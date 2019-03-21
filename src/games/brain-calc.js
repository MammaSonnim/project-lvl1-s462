import readlineSync from 'readline-sync';
import greetUser from '..';
import getRandomNumber from '../utils';

const minNumber = 1;
const maxNumber = 10;
const correctAnswersToWin = 3;

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
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');

  const userName = greetUser();

  for (let i = 0; i < correctAnswersToWin; i += 1) {
    const firstArg = getRandomNumber(minNumber, maxNumber);
    const secondArg = getRandomNumber(minNumber, maxNumber);
    const selected = getRandomItem(operators);
    const sign = getSign(selected);
    const resultOfCalc = operators[selected].calculation(firstArg, secondArg);
    const correctAnswer = String(resultOfCalc);

    console.log(`Question: ${firstArg} ${sign} ${secondArg}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
