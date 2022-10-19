import { askQuestion, greeting } from './index.js';

const getGCD = (a, b) => {
    if (b) {
        return getGCD(b, a % b);
    }
    return Math.abs(a);
};

const gcdGame = () => {
    const name = greeting();

    console.log('Find the greatest common divisor of given numbers.');

    let wins = 0;
    const winsForEnd = 3;

    while (wins < winsForEnd) {
        const n1 = Math.round(Math.random() * 100);
        const n2 = Math.round(Math.random() * 100);

        const correctAnswer = getGCD(n1, n2);

        const userAnswer = askQuestion(`${n1} ${n2}`);

        if (parseInt(userAnswer, 10) === correctAnswer) {
            wins += 1;
            console.log('Correct!');
        } else {
            wins = 0;
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        }
    }
    console.log(`Congratulations, ${name}!`);
};

export default gcdGame;
