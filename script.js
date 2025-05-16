const words =['House','Welcome','Wellcode'];
const wordNumber = getRandomInt(words.length);
let livesNo = 7;

let chosenWord = words[wordNumber];
let numberLetter = chosenWord.length;
let positionsOfChosenWord = '';
document.getElementById('lineNo').innerHTML=chosenWord.length;
document.getElementById('lives').innerHTML=livesNo;
for (let i = 0; i < chosenWord.length; ++i) {
  positionsOfChosenWord += "_ ";
}
document.getElementById('line').innerHTML=positionsOfChosenWord;
chosenWord = chosenWord.split('');
let arrayPositionsOfChosenWord = positionsOfChosenWord.split('');

function searchLetters() {
  let foundLetter = 0;
  let letterLooking = document.getElementById('searchLetter').value;
  for (let i = 0; i < chosenWord.length; ++i) {
    let copychosenWord = chosenWord[i];
    if (letterLooking[0].toLowerCase() === chosenWord[i].toLowerCase())  {
      foundLetter = 1;
      arrayPositionsOfChosenWord.splice(i * 2, 1, copychosenWord);
      --numberLetter;
      chosenWord.splice(i, 1, '0');
    } 
  }
  if (foundLetter == 0) {
    --livesNo;
    foundLetter = 0;
    document.getElementById('lives').innerHTML=livesNo;  
  }
  if (livesNo == 0) {
    document.getElementById('message').innerHTML = "Unfortunately you LOST 😒";
  } else if (numberLetter == 0) {
    document.getElementById('message').innerHTML = "You are a WINNER!🎉";
  }
  document.getElementById('line').innerHTML = arrayPositionsOfChosenWord.join('');
  document.getElementById('searchLetter').value="";
  document.getElementById('lineNo').innerHTML= numberLetter;
}

function getRandomInt(totalWords) {
    return Math.floor(Math.random() * totalWords);
}