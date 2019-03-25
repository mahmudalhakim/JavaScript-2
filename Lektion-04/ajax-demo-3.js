// Ajax Demo 3

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


// Läs en XML-fil
const btn = document.getElementById('btn');
btn.addEventListener('click' , function () {
    load('cd_catalog.xml' , demoCallback);
})

// En callback som anropas när en XML-fil har skickats till webbläsaren
function demoCallback(xhr){

    // Referens till XMLHttpRequest-objektet
    console.log(xhr);
    
    // Referens till XML (response)
    let xml = xhr.responseXML; // Ett objekt
    console.log(xml); 
    
    
    let title = xml.getElementsByTagName('TITLE');
    // OBS! Case Sensitive
    console.log(title);
    
    // title är en HTMLCollection som liknar en array
    // Vi får itererea över en collection
    // men vi får inte använda forEach 
    // eller andra metoder som finns i arrayer 

    let result = '<ol>';
    for (let i = 0; i < title.length; i++) {
        console.log(title[i].textContent);
        result += '<li>' + title[i].textContent + '</li>';
    }
    result += '</ol>';
    
    const demo = document.getElementById('demo');
    demo.innerHTML = result;
}