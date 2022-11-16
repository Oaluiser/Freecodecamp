let count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <=6) {
    count += 1
  }
  if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
    count -= 1
  }

  if (count >= 1) {
    return count + " Bet";
  } else {
    return count + " Hold"
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');