import { askQuestion, greeting } from './index.js';

const evenGame = () => {
    const name = greeting();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let wins = 0;
    while (wins !== 3) {
        const question = Math.round(Math.random() * 10);
        const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

        const userAnswer = askQuestion(question);

        if (userAnswer === correctAnswer) {
            wins += 1;
            console.log('Correct!');
        } else {
            wins = 0;
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        }
    }

    console.log(`Congratulations, ${name}!`);
};

export default evenGame;
