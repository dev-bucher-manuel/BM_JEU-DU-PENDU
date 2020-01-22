var words = [
  "pragmatique","procrastination","branquignol","melliflu","paroxysme","philateliste","dystopie","pétrichor","troll","prolixe","diaphane","brindezingues","homerique","thebaide","immarcescible","offuscation","alacrite","disruptif","nitescence","meteorisme","seide","calembredaine","adamantin","streaker","eurythmie","aimer","assez","avion","cache","capot","carte","chien","essai","cycle","jambe","lourd","maman","livre","lourd","ortie","pomme","robot","seuil","usuel","valse","ananas","babine","arcade","billet","bronze","garage","hochet","humour","hurler","rapide","tomate","billard","corbeau","drapeau","journal","losange","senteur","sifflet","vautour","logiciel","question","triangle","vautour","spirale","batterie","graphique","vestiaire","populaire","avalanche","mascarade","peripetie","utopique","scorpion","trousse","notable","pouvoir","losange","fourmis","dentier","chariot","tonneau","cloporte","tabouret","pastiche","referencement","cloche","boucle",
  "poumon","grelot","limite","whisky","claviers","souris","chat","chien",
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'Tu as gagné!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'Désolé la réponse était : ' + answer;
    document.getElementById('keyboard').innerHTML = 'TU AS PERDU! TU SERAS PENDU HAUT ET COURT !!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();
