
// The Global Scope
var mahmud = "Mahmud är en global variabel";       
// mahmud läggs till objektet window (obs! var)

// OBS! Variabler med let eller const läggs inte till window
let kalle = "Kalle är en global variabel";         
// Läggs till i Script-Scope (Obs! let)

console.log(mahmud); 
console.log(kalle); 

function demo () {
    // Funktioner har ett eget scope 
    // Men har tillgång till över scope
    console.log(mahmud + ' inne i funktionen demo');
    console.log(kalle  + ' inne i funktionen demo');
    console.log(window.mahmud); // Mahmud 
    console.log(window.kalle); // undefined - varför? Se rad 8


    // Lokala variabler (Function Scope)
    var namn = "Namn är en lokal variabel i funktionen demo";
    console.log(namn);
    
    function inne() {
        console.log(mahmud + ' i funktionen inne');
        console.log(kalle  + ' i funktionen inne');

        // Vi har tillgång till variabler som tillhör objektet ovanför
        console.log(namn);

        function inne2 () {
            console.log(mahmud + ' i funktionen inne2');
            console.log(namn  +  ' i funktionen inne2');
            
            // Pausa exekveringen i Chrome
            // debugger;
        }
        inne2();
    }
    inne();


    // OBS! ingen var elle let
    alhakim = "Al Hakim";
    console.log(mahmud + ' ' + alhakim);

}

demo();

// console.log(namn); // ReferenceError: namn is not defined
// namn finns bara inne i funktionen demo
// namn finns inte globalt
// Det spelar ingen roll om vi deklarear med var, let eller const

// debugger;
console.log(alhakim);  // Farligt men vanligt
// Borde vi inte få ReferenceError?
// alhakim läggs till objektet window
// Vi har glömt var, let eller const på rad 46



// Block Scope (Fr.o.m. ES6 - ES2015)
// let och const har block-scope i JS
{
    let mahmud = "Vad som helst";
    console.log(mahmud);
    // OBS! mahmud finns tillgänglig enbart i detta block
}
console.log(mahmud); // Global

let array = [1,2];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
// Vad händer om vi försöker skriva ut utanför blocket
// console.log(index);   // Uncaught ReferenceError: index is not defined
// console.log(element); // Uncaught ReferenceError: element is not defined

if(true){
    let test = 123;
    console.log(test);
}
// console.log(test); // ReferenceError: test is not defined