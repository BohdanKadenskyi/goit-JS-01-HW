console.log("TASK-7");

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const addLogin = function (allLogins, login) {
  //=================================
  // isLoginValid
  //=================================
  const isLoginValid = function (login) {
    for (let i = 0; i < login.length; i += 1) {
      if (login.length >= 4 && login.length < 16) {
        return true;
      } else {
        return false;
      }
    }
  };
  console.log(isLoginValid(login));

  //=================================
  // isLoginUnique
  //=================================
  const isLoginUnique = function (allLogins, login) {
    const findLogin = allLogins.includes(login);
    return findLogin;
  };

  console.log(isLoginUnique(logins, login));

  //=================================
  // addLogin (pattern and add login)
  //=================================

  if (isLoginValid(login) === false) {
    let messageValidError = "Ошибка! Логин должен быть от 4 до 16 символов";
    return messageValidError;
  }

  if (isLoginUnique(logins, login) === true) {
    let messageError = "Такой логин уже используется!";
    return messageError;
  }

  if (isLoginUnique(logins, login) === false) {
    allLogins.push(login);
    let messageAdd = "Логин успешно добавлен!";
    return messageAdd;
  }
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);
