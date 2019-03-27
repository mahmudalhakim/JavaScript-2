$(document).ready(function() {
    getRandomUser();

    $('#get-user').on('click' , 'a' , function(e){
        e.preventDefault();
        getRandomUser();
    });

}); // ready

// En funktion som hämtar en random user från https://randomuser.me/api
function getRandomUser() {
    jQuery.ajax({
        url: "https://randomuser.me/api/",
        dataType: "json",
        success: function(data) {
            showUser(data.results[0]);
        }
    });
}

// En funktion som visar en user i en Bootstrap-Card
function showUser(user){
    console.log(user);
    $('.card-img-top').attr('src', user.picture.large);
    $('.card-title').text(user.name.first + ' ' + user.name.last)
    $('.card-text')
        // .html('Age: ' + user.dob.age + '<br>' +
        //         'City: ' + user.location.city)
        .html(` Age:  ${user.dob.age} <br>
                City: ${user.location.city} `)
        .css('text-transform' , 'capitalize');
    $('#contact').attr('href', 'mailto:' + user.email);

    $('.card-body').css('text-transform' , 'capitalize');
    $('.card').hide().fadeIn(1000);
  }