var hello = "interesting";
function example() {
  var hello = "hi!";
  console.log(hello);
}
example();
console.log(hello);


var hello;
function example() {
  var hello;
  hello = "hi";
  console.log(hello);
}
hello = "interesting";
example();
console.log(hello);

console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
//outputs undefined, Yipee I was first!

var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);

var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
  console.log(food);
}
eat();
console.log(food);
//outputs half-chicken, gone, Chicken

var food;
function eat() {
    var food;
    food = "half-chicken";
    console.log(food);
    food = "gone";
    console.log(food);
}
food = "Chicken";
eat();
console.log(food);

var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);
// outputs NEW!

var new_word;
function lastFunc() {
  new_word = "old";
}
new_word = "NEW!"
console.log(new_word);
