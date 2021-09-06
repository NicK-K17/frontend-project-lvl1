import readlineSync from "readline-sync";

const questionName = () => {
  const name = readlineSync.question("May I have you name? ");
  console.log(`Hello, ${name}!`);
};
export default questionName;
