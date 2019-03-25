// Ajax Demo 2

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
    
} // load


// En callback-function som skickas till load
function demo1(xhr){
    const demo1 = document.getElementById('demo1');
    demo1.innerHTML = xhr.responseText;
}

// En callback-function som skickas till load
function demo2(xhr){
    const demo2 = document.getElementById('demo2');
    demo2.innerHTML = xhr.responseText;
}

// Hämta btn1 och lägg till en klick-event
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click' , function () {
    load('demo1.txt' , demo1);
})
// Hämta btn2 och lägg till en klick-event
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click' , function () {
    load('demo2.txt' , demo2);
})

// Hämta data från flera olika textfiler
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click' , function () {
    load('demo1.txt' , demo3);
    load('demo2.txt' , demo3);
})
// En callback som anropas när en textfil har skickats till webbläsaren
function demo3(xhr){
    const demo = document.getElementById('demo3');
    demo.innerHTML += xhr.responseText;
}