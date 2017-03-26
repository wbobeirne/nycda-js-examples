// Print a string defined in the function (No arguments)
function printWhatsUp() {
  console.log("What's up!");
}

printWhatsUp();


// Combine two strings and print them
function printStringAndString(string1, string2) {
  console.log(string1 + " and " + string2);
}

printStringAndString("cats", "dogs");


// Monty hall / price is right simulator
function checkBehindDoor(doorNumber) {
  var prize;

  if (doorNumber === 1) {
    prize = "A brand new car!";
  } else if (doorNumber === 2) {
    prize = "A new washer dryer!";
  } else if (doorNumber === 3) {
    prize = "Oh no! It's a goat...";
  } else {
    prize = "You entered an invalid door. Try 1, 2, or 3.";
  }

  return prize;
}

console.log(checkBehindDoor(1));
console.log(checkBehindDoor(2));
console.log(checkBehindDoor(3));
console.log(checkBehindDoor(4));
console.log(checkBehindDoor("1"));
