function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice(){
  var hand = [];
  for (var i = 0; i < 5; i++) {
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

function rollSelectedDice(indices, hand) {
  for (var i = 0; i < indices.length; i++) {
      hand[indices[i]] = rollDie();
  }
}

