import getRandomNumber from '../getRandomNumber.js';
import game from '../index.js';

const progression = () => {
  const startNumber = Math.floor(Math.random() * 51);
  const stepProgression = Math.floor(Math.random() * (11 - 2)) + 2;
  const progressionResult = [startNumber];
  for (let i = 1; i < 10; i += 1) {
    progressionResult.push(progressionResult[progressionResult.length - 1] + stepProgression);
  }
  return progressionResult;
};

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const progressionArray = progression();
  const missingNumber = getRandomNumber(0, 9);
  const correctAnswer = String(progressionArray[missingNumber]);
  progressionArray[missingNumber] = '..';
  const question = progressionArray.join(' ');
  return [question, correctAnswer];
};

const progressionGameStart = () => {
  game(description, getGameData);
};
export default progressionGameStart;
