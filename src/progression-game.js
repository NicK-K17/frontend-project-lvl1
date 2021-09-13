import readlineSync from "readline-sync";

const progression = () => {
  const startNumber = Math.floor(Math.random() * 51);
  const stepProgression = Math.floor(Math.random() * (11 - 2)) + 2;
  const progressionResult = [startNumber];
  for (let i = 1; i < 10; i += 1) {
    progressionResult.push(progressionResult[progressionResult.length - 1] + stepProgression);
  }
  return progressionResult;
};
const progressionGameLogic = () => {
  const name = readlineSync.question("May I have you name? ");
  console.log(`Hello, ${name}!`);
  console.log("What number is missing in the progression?");
  for (let i = 1; i <= 3; i += 1) {
    const progressionArray = progression();
    const missingNumber = Math.floor(Math.random() * 10);
    const correctAnswer = progressionArray[missingNumber];
    progressionArray[missingNumber] = "..";
    console.log(`Question: ${progressionArray.join(" ")}`);
    const answer = readlineSync.question("Your answer: ");
    if (Number(answer) === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
};
export default progressionGameLogic;
