function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
function game() {
  let count = 9;
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
    if(count > 0){
    if (userNumber > randomNumber) {
      alert(`Загаданное число меньше. Осталось попыток ${count}`);
      count--;
      guessNumber();
    } else if (userNumber < randomNumber) {
      alert(`Загаданное число больше. Осталось попыток ${count}`);
      count--;
      guessNumber();
    } else {
      alert("Поздравляю, Вы угадали!!!");
      return;
    }
    alert("Игра окончена");
    
    return game()
}
  }

  return guessNumber();
}
game();
