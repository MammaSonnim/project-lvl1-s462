import readlineSync from 'readline-sync';
import greetUser from '..';
import getRandomNumber from '../utils';

const minNumber = 1;
const maxNumber = 100;
const correctAnswersToWin = 3;
const yes = 'yes';
const no = 'no';

const isEven = number => number % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Answer "${yes}" if number even otherwise answer "${no}".`);

  const userName = greetUser();

  for (let i = 0; i < correctAnswersToWin; i += 1) {
    const number = getRandomNumber(minNumber, maxNumber);

    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) ? yes : no;

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
