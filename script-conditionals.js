// Alerts if a number is greater than, equal to, or less than ten.
function notifyGreaterThanTen(number) {
  if (number < 10) {
    alert(number + " is less than 10");
  } else if (number === 10) {
    alert(number + " is 10");
  } else {
    alert(number + " is greater than or equal to 10");
  }
}

notifyGreaterThanTen(1);
notifyGreaterThanTen(10);
notifyGreaterThanTen(100);

// Checks if two strings are the same, or if they're different.
function checkSameString(string1, string2) {
  if (string1 === string2) {
    alert(string1 + " is the same as " + string2);
  } else {
    alert(string1 + " is different from " + string2);
  }
}

checkSameString("Hello", "Hello");
checkSameString("HELLO", "hello");
checkSameString(10, "10");
