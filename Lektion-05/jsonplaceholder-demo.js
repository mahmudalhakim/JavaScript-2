// Hämta data från https://jsonplaceholder.typicode.com

// Hämta 10 användare från jsonplaceholder
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(json => showUsers(json))
    .catch(err => console.log(err))


function showUsers(users){
    console.log(users);
    
    // "Cache your divs"
    const div1 = document.getElementById('users1');
    const div2 = document.getElementById('users2');
    const div3 = document.getElementById('users3');
    const div4 = document.getElementById('users4');

    // Skapa en platshållare till resultatet
    let result = '';

    // Visa alla namn i div1
    // OBS! users är en array (som vi fått från APIet)
    users.forEach(obj => result += obj.name + '<br>')
    div1.innerHTML = result;

    // Visa namn och e-post i en tabell
    result = `<table border=1>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>`;

    users.forEach(user => {
        result += `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>  
                    </tr>`;
        })
    result += '</table>'; 
    div2.innerHTML = result;


    // Visa en HTML-lista
    result = '<ol>';
    users.forEach(user=> result += `<li>${user.name}</li>`)
    result += '</ol>';
    div3.innerHTML = result;

    // Visa adressetiketter
    result = '';
    users.forEach(user => {
        result += `<div class="address">
                <h4>${user.name}</h4>
                <p>
                    ${user.address.street}  <br>
                    ${user.address.suite}   <br>
                    ${user.address.zipcode} <br>
                    ${user.address.city}    <br>
                </p>
            </div>`;
    });
    div4.innerHTML = result;
    
} // showUsers