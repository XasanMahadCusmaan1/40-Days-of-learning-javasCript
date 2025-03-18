//Secret number guesing game

let randomNumber = Math.floor(Math.random() * 100 + 1);
let max = 100;
let attemptCount = 1;

console.log(randomNumber);

function secretNumberGuesing() {
  let userAnswer = window.prompt(`Gues number between 1-${max}`);
  // userAnswer = Number(userAnswer);
  if (userAnswer == null) {
    console.log("Canceled the game");
    return;
  }
  if (userAnswer > max || userAnswer < 0 || userAnswer == "") {
    console.log(
      `You are out of the guesing range which is 0 - ${max} please try agian`
    );
    secretNumberGuesing();
  } else if (userAnswer === randomNumber) {
    console.log(
      `${userAnswer} is the correct number and the gues number was : ${randomNumber} 🎉`
    );
    console.log(`Your vaid attempts was ${attemptCount}`);
  } else if (userAnswer < randomNumber) {
    console.log(`${userAnswer} is too low`);
    attemptCount = attemptCount + 1;
    secretNumberGuesing();
  } else if (userAnswer > randomNumber) {
    console.log(`${userAnswer} is too hight`);
    attemptCount = attemptCount + 1;
    secretNumberGuesing();
  }
}

secretNumberGuesing();
