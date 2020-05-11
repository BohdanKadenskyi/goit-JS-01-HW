console.log("TASK-6");

let input;
const numbers = [];
let total = 0;

const counter = () => {
  do {
    input = prompt("Enter number");

    const value = Number(input);

    if (Number.isNaN(value)) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }

    numbers.push(value);

    if (input === null) {
      console.log("Cancel");
      break;
    }
  } while (true);

  for (const number of numbers) {
    total += number;
  }
  const message = `Общая сумма чисел равна ${total}`;
  return message;
};

console.log(counter());
