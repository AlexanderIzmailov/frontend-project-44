import { askQuestion, greeting, randomIntFromInterval } from './index.js';

const createQuestion = () => {
  const startNumber = randomIntFromInterval(0, 100);
  const quantityOfNumbers = randomIntFromInterval(5, 10);
  const hiddenNumber = randomIntFromInterval(5, quantityOfNumbers);
  const step = randomIntFromInterval(0, 10);

  const question = [];
  let correctAnswer;
  let temp = startNumber;

  for (let i = 1; i <= quantityOfNumbers; i += 1) {
    if (i === hiddenNumber) {
      correctAnswer = temp;
      question.push('..');
    } else {
      question.push(temp);
    }

    temp += step;
  }
  return [question.join(' '), correctAnswer];
};

const progressionGame = () => {
  const name = greeting();

  console.log('What number is missing in the progression?');

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

export default progressionGame;
