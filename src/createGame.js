import readlineSync from 'readline-sync';
import greetUser from '.';

const correctAnswersToWin = 3;

export default ({ name, generateData }) => {
  console.log('Welcome to the Brain Games!');
  console.log(name);

  const userName = greetUser();

  for (let i = 0; i < correctAnswersToWin; i += 1) {
    const { question, correctAnswer } = generateData();

    console.log(`Question: ${question}`);
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
}