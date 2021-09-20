import getRandomNumber from '../getRandomNumber.js';
import game from '../index.js';

const progression = (startNumber, stepProgression, elementsCount) => {
  const progressionResult = [];
  for (let i = 0; i < elementsCount; i += 1) {
    progressionResult.push(startNumber + stepProgression * i);
  }
  return progressionResult;
};

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const startNumber = getRandomNumber(0, 50);
  const stepProgression = getRandomNumber(2, 10);
  const elementsCount = 10;
  const progressionArray = progression(startNumber, stepProgression, elementsCount);
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
