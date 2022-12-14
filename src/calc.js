import { askQuestion, greeting, randomIntFromInterval } from './index.js';

const createQuestion = () => {
  const n1 = Math.round(Math.random() * 10);
  const n2 = Math.round(Math.random() * 10);
  const operation = randomIntFromInterval(1, 3);

  let result;

  switch (operation) {
    case 1:
      result = [`${n1} + ${n2}`, n1 + n2];
      break;

    case 2:
      result = [`${n1} - ${n2}`, n1 - n2];
      break;

    case 3:
      result = [`${n1} * ${n2}`, n1 * n2];
      break;

    default:
      result = null;
  }

  return result;
};

const calcGame = () => {
  const name = greeting();

  console.log('What is the result of the expression?');

  let wins = 0;
  const winsForEnd = 3;

  while (wins < winsForEnd) {
    const [question, correctAnswer] = createQuestion();

    const userAnswer = askQuestion(question);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      wins += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default calcGame;
