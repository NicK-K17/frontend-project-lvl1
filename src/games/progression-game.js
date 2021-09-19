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
  const startNumber = Math.floor(Math.random() * 51);
  const stepProgression = Math.floor(Math.random() * (11 - 2)) + 2;
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
