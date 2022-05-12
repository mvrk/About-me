'use strict';
let score = 0;

let answerOne = prompt('what\'s your name?');
alert(`welcome ${answerOne}!`);
console.log(answerOne);

//if conditional based prompt command
let answerTwo = prompt('Are you ready to play my guessing game?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('let\'s play!');
  //console.log('let\'s play!');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('sorry you have to play, it is madantory.');
}
function answerThree() {
  let answerThree = prompt('do I have a cat?').toLowerCase();

  if (answerThree === 'yes' || answerThree === 'y') {
    alert('bingo, I do have a cat, her name is Gigi.');
    score++;
    //console.log('bingo, I do have a cat, her name is Gigi.');
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert('emm... you wanna change your answer?');
  }
}
answerThree();


let answerFour = prompt('do I like outdoor activities?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  alert('It is a sure thing! I love outdoors.');
  score++;
  // console.log('It is a sure thing! I love outdoors.');
} else if (answerFour === 'no' || answerFour === 'n') {
  alert('but I do like outdoors.');
}

let answerFive = prompt('Am I married?').toLowerCase();

if (answerFour === 'yes' || answerFive === 'y') {
  alert('Yes, you are right, I am married.');
  score++;
  // console.log('Yes, you are right, I am married.');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('right answer is opposite.');
}

let color = prompt('what is my favorite color?');

//convert the variable of color to lower case and evaluate it

switch (color.toLowerCase()) {
  case 'red':
    alert('my favorite color was red!');
    break;
  case 'blue':
    alert('my favorite color was blue!');
    break;
  default:
    alert('you don\'t know what my favorite color was ¯\\_(ツ)_/¯');
    score++;
  // console.log('my favorite colors are blue and Red.');
}

function answerSix() {
  let answerSix = prompt('guess what is my secret number?');
  let i = 0;

  for (i = 0; i < 4; i++) {
    if (answerSix > 8) {
      alert('too high!');
      answerSix = prompt('guess what is my secret number?');
    } else if (answerSix < 8) {
      alert('too low!');
      answerSix = prompt('guess what is my secret number?');
    } else {
      alert('bingo! how did you do that?!'); score++;
      break;
    }
  }
}
answerSix();

alert('my secret number is 8');
console.log('');

let arrLucky = ['a', 'i', 'd', 'v', 'g'];
function answerSeven() {
  for (let i = 0; i < 6; i++) {
    let answerSeven = prompt('can you hit one of my five lucky letters?');
    for (let j = 0; j < 5; j++) {
      if (answerSeven === arrLucky[j]) {
        alert('you hit one of my lucky letters!'); score++;
        i = 6;
        break;
      }
    }
  }
}
answerSeven();
alert('my lucky letters are a, d, i, v, g.');



confirm(`${answerOne}, you scored ${score} out of 7, you know me better now, can we make friends?`);

