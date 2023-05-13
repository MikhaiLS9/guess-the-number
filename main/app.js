function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
function game() {
  let randomNumber = randomInteger(1, 100);
  function guessNumber() {
    let userNumber = prompt("Угадай число от 1 до 100");
    if (userNumber === null) {
      alert("Игра окончена");
      return;
    }

    if (isNaN(userNumber)) {
      alert("Введи число!");
      guessNumber();
      return;
    }
    userNumber = Number(userNumber)
    
    if (userNumber > randomNumber) {
      alert(`Загаданное число меньше`);
      guessNumber();
    } else if (userNumber < randomNumber) {
      alert("Загаданное число больше");
      guessNumber();
    } else {
      alert("Поздравляю, Вы угадали!!!");
      return;
    }
  }

  return guessNumber();
}
game();
