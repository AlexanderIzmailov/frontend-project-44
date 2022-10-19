import readlineSync from 'readline-sync';

export const askQuestion = (str) => {
    console.log(`Question: ${str}`);
    const userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
};

export const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
};

// eslint-disable-next-line
export const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
