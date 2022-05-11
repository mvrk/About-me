'use strict';

let answerOne = prompt('what\'s your name?');
alert('welcome ' + answerOne +'!');
console.log(answerOne);

//if conditional based prompt command
let answerTwo = prompt('Are you ready to play my guessing game?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y'){
  alert('let\'s play!');
//console.log('let\'s play!');
} else if(answerTwo === 'no' || answerTwo === 'n'){
  alert('sorry you have to play, it is madantory.' );}

let answerThree= prompt('do I have a cat?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y'){
  alert('bingo, I do have a cat, her name is Gigi.');
//console.log('bingo, I do have a cat, her name is Gigi.');
} else if(answerThree === 'no' || answerThree === 'n'){
  alert('emm... you wanna change your answer?' );}

let answerFour= prompt('do I like outdoor activities?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y'){
  alert('It is a sure thing! I love outdoors.');
// console.log('It is a sure thing! I love outdoors.');
} else if(answerFour === 'no' || answerFour === 'n'){
  alert('but I do like outdoors.' );}

let answerFive= prompt('Am I married?').toLowerCase();

if (answerFour === 'yes' || answerFive === 'y'){
  alert('Yes, you are right, I am married.');
// console.log('Yes, you are right, I am married.');
} else if(answerFive === 'no' || answerFive === 'n'){
  alert('right answer is opposite.' );}

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

// console.log('my favorite colors are blue and Red.');
}

confirm(answerOne +', you know me better now, can we make friends?');
