// JavaScript Callbacks -  Demo

// Exempel 1 från MDN

/* https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action.
*/
// processUserInput(greetingAlert);
// processUserInput(greetingConsole);

// Läs in data och skicka vidare till en annan funktion
function processUserInput(callback_function){

    // Läs data från en prompt
    let name = prompt("Vad heter du?");

    // Anrop till en annan function 
    // som skickas in som argument till processUserInput
    callback_function(name);
}

// En funktion som visar en alert 
function greetingAlert(name){
    alert ('Hej ' + name);
}
// En funktion som skickar ett meddelande till console
function greetingConsole(name){
    console.log('Hej ' + name);
}

// Exempel 2
console.log("Synkron (Synchronous) callback");

let myArray = ['a' , 'b' , 'c'];
// console.log(myArray);

console.log('START');

// https://www.w3schools.com/jsref/jsref_foreach.asp
myArray.forEach(function (element) {
    console.log(element);
})

console.log('SLUT');



// Exempel 3
console.log("Asynkron (Asynchronous) callback");

console.log('START');

setTimeout(function () {
    for (const element of myArray) {
        console.log(element);
    }
 } , 10000) 
 
 // Vi går vidare till nästa sats 
 // och kommer tillbaka (Callback) efter 10 sekunder

console.log('SLUT');