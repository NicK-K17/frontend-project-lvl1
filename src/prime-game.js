import readlineSync from "readline-sync";

const primeCheck = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return "no";
    }
  }
  return "yes";
};
const primeGameLogic = () => {
  const name = readlineSync.question("May I have you name? ");
  console.log(`Hello, ${name}!`);
  console.log(`"yes" if given number is prime. Otherwise answer "no".`);
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * (101 - 2)) + 2;
    const correctAnswer = primeCheck(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    if (answer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
};
export default primeGameLogic;
