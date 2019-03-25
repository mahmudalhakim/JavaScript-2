// Ajax Demo 4

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


// Läs en JSON-fil
const btn = document.getElementById('btn');
btn.addEventListener('click' , function () {
    load('demo.json' , demoCallback);
})

// En callback som anropas när 
// en JSON-fil har skickats till webbläsaren
function demoCallback(xhr){

    // Referens till XMLHttpRequest-objektet
    console.log(xhr);

    const demoDIV = document.getElementById('demo');
    
    // Konvertera JSON-strängen till JSON-objekt
    const user = JSON.parse(xhr.responseText);

    let result = '<ul>';

    // Hämta namnet från JSON-objektet
    result += '<li>' + user.name;

    // Hämta e-post från JSON-objektet
    result += '<br>' + user.email;

    // Hämta företagsnamnet från JSON-objektet
    result += '<br>' + user.company.name + '</li>';

    result += '</ul>';
    demoDIV.innerHTML = result;


    console.log(user);
    // Konvertera JSON-objektet ill en JSON-sträng
    let jsonStr = JSON.stringify(user);
    console.log(jsonStr);
}