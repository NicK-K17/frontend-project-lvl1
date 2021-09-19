import getRandomNumber from '../getRandomNumber.js';
import game from '../index.js';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      return null;
  }
};

const description = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operations = ['+', '-', '*'];
  const operator = operations[getRandomNumber(0, operations.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator);
  return [question, correctAnswer];
};

const randomCalcStart = () => {
  game(description, getGameData);
};
export default randomCalcStart;
