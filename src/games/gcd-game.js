import getRandomNumber from '../getRandomNumber.js';
import game from '../index.js';

const getGcd = (number1, number2) => {
  if (number1 === number2 || number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const description = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

const gcdGameStart = () => {
  game(description, getGameData);
};
export default gcdGameStart;
