import getRandomNumber from '../getRandomNumber.js';
import game from '../index.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNumber(2, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGameStart = () => {
  game(description, getGameData);
};
export default evenGameStart;
