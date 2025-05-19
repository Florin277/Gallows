const words =['House','Welcome','Wellcode'];
const wordNumber = getRandomInt(words.length);

let livesNo = 7;
let positionsOfChosenWord = '';
let chosenWord = words[wordNumber];
lineInitialization();

function lineInitialization() {
  for (let i = 0; i < chosenWord.length; ++i) {
    positionsOfChosenWord += "_ ";
  }
  document.getElementById('line').innerHTML = positionsOfChosenWord;
  chosenWord = chosenWord.split('');
  document.getElementById('lineNo').innerHTML = chosenWord.length;
  document.getElementById('lives').innerHTML = livesNo;
}

positionsOfChosenWord = positionsOfChosenWord.split('');
let numberLetter = chosenWord.length;

function searchLetters() {
  let foundLetter = 0;
  let letterLooking = document.getElementById('searchLetter').value;
  for (let i = 0; i < chosenWord.length; ++i) {
    if (letterLooking[0].toLowerCase() === chosenWord[i].toLowerCase())  {
      foundLetter = 1;
      positionsOfChosenWord.splice(i * 2, 1, chosenWord[i]);
      --numberLetter;
      chosenWord.splice(i, 1, '0');
    } 
  }
  if (foundLetter == 0) {
    --livesNo;
    foundLetter = 0;
    document.getElementById('lives').innerHTML = livesNo;  
  }
  printMessage(livesNo, numberLetter);
  document.getElementById('line').innerHTML = positionsOfChosenWord.join('');
  document.getElementById('searchLetter').value = "";
  document.getElementById('lineNo').innerHTML = numberLetter;
}

function getRandomInt(totalWords) {
  return Math.floor(Math.random() * totalWords);
}

function printMessage(x, y) {
  if (livesNo == 0) {
    document.getElementById('message').innerHTML = "Unfortunately you LOST 😒";
  } else if (numberLetter == 0) {
    document.getElementById('message').innerHTML = "You are a WINNER!🎉";
  }
}