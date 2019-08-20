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