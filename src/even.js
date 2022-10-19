import { askQuestion, greeting, randomIntFromInterval } from './index.js';

const evenGame = () => {
  const name = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let wins = 0;
  const winsForEnd = 3;

  while (wins < winsForEnd) {
    const question = randomIntFromInterval(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    const userAnswer = askQuestion(question);

    if (userAnswer === correctAnswer) {
      wins += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
