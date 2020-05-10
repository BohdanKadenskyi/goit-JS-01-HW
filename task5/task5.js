console.log("TASK-5");

const checkForSpam = function (message) {
  const messageString = message.toLowerCase();
  let checkSpam = "spam";
  let checkSale = "sale";
  return messageString.includes(checkSpam) || messageString.includes(checkSale);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
