import { askQuestion, greeting } from './index.js';

const isPrime = (num) => {
  if (num === 2 || num === 3) return true;
  if (num <= 1 || num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const primeGame = () => {
  const name = greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let wins = 0;
  const winsForEnd = 3;

  while (wins < winsForEnd) {
    const question = Math.round(Math.random() * 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

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

export default primeGame;
