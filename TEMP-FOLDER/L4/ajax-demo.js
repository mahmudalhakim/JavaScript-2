/***************************************************
 *
 *        Funktionen load hämtar data via Ajax
 *        i valfritt format (TXT, XML, JSON)
 *
 ****************************************************/
function load(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this);
      callback(this);
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

/*
 *    DEMO 1 - Hämta ett textdokument
 */
let loadBtn1 = document.getElementById("loadBtn1");
loadBtn1.addEventListener("click", function() {
  load("demo1.txt", demo1);
});

function demo1(xhr) {
  document.getElementById("demo").innerHTML = xhr.responseText;
}

/*
 *    DEMO 2 - Hämta två textdokument
 */
let loadBtn2 = document.getElementById("loadBtn2");
loadBtn2.addEventListener("click", function() {
  load("demo1.txt", demo1);
  load("demo2.txt", demo2);
});

function demo2(xhr) {
  document.getElementById("demo").innerHTML += "<br>" + xhr.responseText;
}

/*
 *    DEMO 3 - Hämta XML-dokument
 */
let loadBtn3 = document.getElementById("loadBtn3");
loadBtn3.addEventListener("click", function() {
  load("cd_catalog.xml", demo3);
});
function demo3(xhr) {
  let xml = xhr.responseXML;
  let ARTIST = xml.getElementsByTagName("ARTIST");

  let list = "<ul>";
  for (let i = 0; i < ARTIST.length; i++) {
    list += "<li>" + ARTIST[i].textContent + "</li>";
  }
  list += "</ul>";

  document.getElementById("demo").innerHTML = list;
}

/*
 *    DEMO 4 - Arbeta med XML-dokument
 *    Övning – Skapa en tabell från en XML-fil
 *    Arbeta i grupper under ca 30 minuter
 */
let loadBtn4 = document.getElementById("loadBtn4");
loadBtn4.addEventListener("click", function() {
  load("cd_catalog.xml", demo4);
});

function demo4(xhr) {
  let xml = xhr.responseXML;
  console.log(xml);

  let cd = xml.getElementsByTagName("CD");
  console.log(cd);

  let table = "<table border=1>";
  table += "<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < cd.length; i++) {
    table += "<tr>";
    table +=
      "<td>" + cd[i].getElementsByTagName("ARTIST")[0].textContent + "</td>";
    table +=
      "<td>" + cd[i].getElementsByTagName("TITLE")[0].textContent + "</td>";
    table += "</tr>";
    // Eller navigera i DOM
    console.log(cd[i].children[0].textContent);
  }
  table += "</table>";

  document.getElementById("demo").innerHTML = table;
}

/*
 *    DEMO 5 - Arbeta med JSON
 */
let loadBtn5 = document.getElementById("loadBtn5");
loadBtn5.addEventListener("click", function() {
  load("demo.json", demo5);
});

function demo5(xhr) {
  let user = JSON.parse(xhr.responseText);
  console.log(user);
  document.getElementById("demo").innerHTML = user.name;
}

/*
 *    DEMO 6 - Visa JSON som string
 */
let loadBtn6 = document.getElementById("loadBtn6");
loadBtn6.addEventListener("click", function() {
  load("demo.json", demo6);
});

function demo6(xhr) {
  let user = JSON.parse(xhr.responseText);
  document.getElementById("demo").innerHTML = JSON.stringify(user);
}

/*
 *    DEMO 7 - Visa ett slumpmässigt namn från NamnAPI.se
 */
 // Varför https://cors.io/? före URLen?
// Bra teori finns här
// https://developer.chrome.com/extensions/xhr
// Lösning 1: Använd en Proxy-server t.ex. https://cors.io
// Lösning 2: Lägg till detta extension till Chrome. 
// OBS! Aktivera endast vid testning. Kan blockera vissa sajter t.ex. YouTube.
// https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
  
let loadBtn7 = document.getElementById("loadBtn7");

loadBtn7.addEventListener("click", function() {
  let url = "https://cors.io/?http://api.namnapi.se/v2/names.json?limit=1";

  load(url, demo7);
});

function demo7(xhr) {
  let json = JSON.parse(xhr.responseText);
  let array = json.names;
  let name = array[0];
  console.log(name);
  document.getElementById("demo").innerText =
    name.firstname + " " + name.surname;
}

/*
 *    DEMO 8 - Visa 10 slumpmässiga namn från NamnAPI.se
 */
let loadBtn8 = document.getElementById("loadBtn8");

loadBtn8.addEventListener("click", function() {
  let url = "https://cors.io/?http://api.namnapi.se/v2/names.json?limit=10";

  load(url, demo8);
});

function demo8(xhr) {
  let json = JSON.parse(xhr.responseText);
  let array = json.names;
  let text = "";
  for (let i = 0; i < array.length; i++) {
    text += array[i].firstname + " " + array[i].surname + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

// Skapa en dropdown-lista som ger besökaren
// möjlighet att välja antal slumpmässiga namn från www.NamnAPI.se
let select = document.getElementById("select");
select.addEventListener("change", function() {
  let count = select.value;
  let url =
    "https://cors.io/?http://api.namnapi.se/v2/names.json?limit=" + count;

  load(url, demo8);
});
