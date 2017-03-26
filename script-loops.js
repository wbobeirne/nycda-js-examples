// Print the numbers 1 to 10. For loops don't have to start at zero.
for (var i = 1; i <= 10; i++) {
  console.log(i);
}


// Print every element in an array
var colors = ["Blue", "Green", "Red"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


// Run a while loop until our word is really long. You can check length on
// strings, in addition to arrays!
var yelling = "aaa";

while (yelling.length < 20) {
  yelling = yelling + "a";
  console.log(yelling);
}
