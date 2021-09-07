import readlineSync from "readline-sync";

const parityCheck = () => {
  const name = readlineSync.question("May I have you name? ");
  console.log(`Hello, ${name}!`);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 1; i < 4; i += 1) {
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("You answer: ");
    if (randomNumber % 2 === 0 && answer === "yes") {
      console.log("Correct!");
    } else if (randomNumber % 2 !== 0 && answer === "no") {
      console.log("Correct!");
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};
export default parityCheck;
