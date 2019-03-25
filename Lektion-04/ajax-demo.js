// Ajax Demo
// Funktionen load - version 1.0

function load(){

    // Objektet XMLHttpRequest
    let xhr = new XMLHttpRequest();    

    // Undersök objektet i konsolfönstret
    console.log(xhr); 
    
    // On readyState Change 
    // readyState är en egenskap som finns i xhr
    // Vi kör en calback vid ändring i readyState
    /*  readyState har följande state (tillstånd)
        0: request not initialized 
        1: server connection established
        2: request received 
        3: processing request 
        4: request finished and response is ready
    */
    xhr.onreadystatechange = function () {

            console.log("readyState: " + this.readyState);
            console.log("Status: " + this.status);     // 200 == OK

            if(this.readyState === 4  && this.status === 200 ) {

                // Här kan vi bearbeta data
                console.log(this.responseText);
                
                // Skicka data till ett element på sidan
                const demo1 = document.getElementById('demo1');
                demo1.innerHTML = this.responseText;
            }

        }

    // Skicka en request (förfrågan) till en lokal server
    // Steg 1
    xhr.open('GET' , 'demo1.txt' , true);
    // OBS! true anger asynkron
    
    // Steg 2
    xhr.send();
    
} // load

load();