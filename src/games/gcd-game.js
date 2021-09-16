import getRandomNumber from '../getRandomNumber.js';
import game from '../index.js';

const gcd = (number1, number2) => {
  const greatestNumber = (number1 > number2) ? number1 : number2;
  const smallestNumber = (number1 > number2) ? number2 : number1;
  for (let i = smallestNumber; i > 0; i -= 1) {
    if (smallestNumber % i === 0 && greatestNumber % i === 0) {
      return i;
    }
  }
  return null;
};

const description = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

const gcdGameStart = () => {
  game(description, getGameData);
};
export default gcdGameStart;
