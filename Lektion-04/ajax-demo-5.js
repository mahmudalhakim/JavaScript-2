// Ajax Demo 5

/**********************************************
 * load - version 2.0
 * Funktionen load använder Ajax
 * för att hämta data från en valfri URL
 * i valfritt format (txt, xml, json)
 * @param url: sökväg till en resurs
 * @param callback: en funktion som exekveras 
 *                  när response skickas tillbaka från servern 
 */
function load(url , callback){

    let xhr = new XMLHttpRequest();    
    
    xhr.onreadystatechange = function () {
        if(this.readyState === 4  && this.status === 200 ) {
            callback(this); 
        }
    }
    xhr.open('GET' , url , true);
    xhr.send();
    
} // load avslutas här


// Läs en JSON-fil från namnapi.se
const btn = document.getElementById('btn');
btn.addEventListener('click' , function () {
    load('https://cors.io/?http://api.namnapi.se/v2/names.json?limit=1' , demoCallback);
})

// En callback som anropas när 
// en JSON-fil har skickats till webbläsaren
function demoCallback(xhr){

    // Referens till XMLHttpRequest-objektet
    // console.log(xhr);

    const demoDIV = document.getElementById('demo');
    
    // Konvertera JSON-strängen till JSON-objekt
    const users = JSON.parse(xhr.responseText);
    console.log(users);

    //OBS! user är en array som innehåller ett objekt
    console.log(users.names);

    // Skriv ut första elementet i arrayen
    console.log(users.names[0]);

    // Spara första elementet i en variabel
    let user = users.names[0];

    // Hämta förnamnet från JSON-objektet (user)
    let firstName = user.firstname;

    // Hämta efternamnet från JSON-objektet (user)
    let lastName = user.surname;

    demoDIV.innerHTML = firstName + ' ' + lastName;


    console.log(user);
    // Konvertera JSON-objektet ill en JSON-sträng
    let jsonStr = JSON.stringify(user);
    console.log(jsonStr);
}