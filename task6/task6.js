console.log("TASK-6");

let input;
const numbers = [];
let total = 0;

const counter = () => {
  do {
    input = prompt("Enter number");

    if (input === null) {
      const messageConsole = `Общая сумма чисел равна ${total}`;
      return messageConsole;
    }

    input = Number(input);
    const notNumber = Number.isNaN(input);
    if (notNumber) {
      console.log(alert("Было введено не число, попробуйте еще раз"));
      continue;
    }

    if ((total += input)) {
      for (const number of numbers) {
        console.log(number);
        total += number;
      }
    }
  } while (true);
};

console.log(counter());
