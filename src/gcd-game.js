import readlineSync from "readline-sync";

const gcd = (number1, number2) => {
  const greatestNumber = (number1 > number2) ? number1 : number2;
  const smallestNumber = (number1 > number2) ? number2 : number1;
  for (let i = smallestNumber; i > 0; i -= 1) {
    if (smallestNumber % i === 0 && greatestNumber % i === 0) {
      return i;
    }
  }
  return null;
};
const gcdGameLogic = () => {
  const name = readlineSync.question("May I have you name? ");
  console.log(`Hello, ${name}!`);
  console.log("Find the greatest common divisor of given numbers.");
  for (let i = 1; i < 4; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 101);
    const randomNumber2 = Math.floor(Math.random() * 101);
    const correctAnswer = gcd(randomNumber1, randomNumber2);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answer = readlineSync.question("Your answer: ");
    if (Number(answer) === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gcdGameLogic;
