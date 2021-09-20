import getRandomNumber from '../getRandomNumber.js';
import game from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = '"yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNumber(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGameStart = () => {
  game(description, getGameData);
};

export default primeGameStart;
