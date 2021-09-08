import readlineSync from "readline-sync";

const randomCalc = () => {
  const operations = ['+', '-', '*'];
  const name = readlineSync.question("May I have you name? ");
  console.log(`Hello, ${name}!`);
  console.log("What is the result of the expression?");
  for (let i = 1; i < 4; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 101);
    const randomNumber2 = Math.floor(Math.random() * 101);
    const randomOperations = Math.floor(Math.random() * 3);
    let correctAnswer;
    console.log(`Question: ${randomNumber1} ${operations[randomOperations]} ${randomNumber2}`);
    switch (operations[randomOperations]) {
      case '+':
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        correctAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        break;
    }
    const answer = readlineSync.question("You answer: ");
    if (correctAnswer === Number(answer)) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default randomCalc;
