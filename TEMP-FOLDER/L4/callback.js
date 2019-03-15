'use strict';

// Exempel 1
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
function greeting(name) {
  alert("Hello " + name);
}
function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}
// processUserInput(greeting);

// Synchronous callback function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
var array1 = ["a", "b", "c"];

console.log("START");
array1.forEach(function(element) {
  console.log(element);
});
console.log("FINISH");

// Asynchronous callback function
console.log("START");
setTimeout(function() {
  for (const i of array1) {
    console.log(i);
  }
}, 1000);
console.log("FINISH");
