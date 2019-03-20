import readlineSync from 'readline-sync';
import greetUser from '..';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const CORRECT_ANSWERS_TO_WIN = 3;
const YES = 'yes';
const NO = 'no';

const getRandomNumber = () => Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;

export default () => {
  console.log(`Answer "${YES}" if number even otherwise answer "${NO}".`);

  const userName = greetUser();
  let correctAnswersCount = 0;

  while (correctAnswersCount < CORRECT_ANSWERS_TO_WIN) {
    const number = getRandomNumber();
    const isEvenNumber = number % 2 === 0;

    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if ((userAnswer === YES && isEvenNumber) || (userAnswer === NO && !isEvenNumber)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEvenNumber ? YES : NO}".`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
