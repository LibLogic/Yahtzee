const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
 var hand = [];
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice(numDiceToRoll){

  for (var i = 0; i < numDiceToRoll; i++) {
    hand.push(rollDie());
  }
  return hand;
}

function rollGame() {
  let hands = [];
  for (var i = 0; i < 3; i++) {
    hands.push(rollDice());
  }
  return hands;
}

function rollSelectedDie(index) {
  hand[index] = rollDie();
}

function rollSelectedDice(indices) {
  for (var i = 0; i < indices.length; i++) {
      hand[indices[i]] = rollDie();
        // console.log(indices[i], 'i')
  }
}

function isYahtzee(hand) {
  return hand.every(item => item === hand[0]);
}

hand = rollDice(5);
let rollCount = 1;
function runGame() {
  console.clear();
  rollCount++;
  isYahtzee(hand) ? (console.log(hand, 'Yahtzee!'), process.exit()) :
  console.log(hand, 'Your hand\n');
  console.log('  ^  ^  ^  ^  ^');
  console.log([0, 1, 2, 3, 4], 'Using a comma separated list, please indicate\n\t\t\tthe index of each dice you would like to re-roll');

  readline.question("", (input) => {
    input = input.split(',').map(Number);
    if (rollCount < 33) {
      runGame();
    } else {
      console.log(hand, 'Your Final hand\n');
      readline.close();
    }
  });
}

runGame();
