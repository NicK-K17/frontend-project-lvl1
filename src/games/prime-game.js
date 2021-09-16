import getRandomNumber from "../getRandomNumber.js";
import game from "../index.js";

const primeCheck = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return "yes";
    }
  }
  return "no";
};

const description = `"yes" if given number is prime. Otherwise answer "no".`;

const getGameData = () => {
  const question = getRandomNumber(2, 100);
  const correctAnswer = primeCheck(question);
  return [question, correctAnswer];
};

const primeGameStart = () => {
  game(description, getGameData);
};

export default primeGameStart;
