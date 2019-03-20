// Arbeta med effekter

$(document).ready(function () {

    // Visa innehåll
    $('#show').click(function () {
        $('.demo1').show(300);
    });

    // Dölj innehåll
    $('#hide').click(function () {
        $('.demo1').hide(300);
    });

    // Toggle
    $('#demo2').click(function () {
        $('.demo2').toggle(300);
        $(this).text(function (i, text) {
            return (text === 'Visa') ? 'Dölj' : 'Visa' ;
        });
        $(this).toggleClass('btn-outline-danger btn-outline-primary');
    });

}); // ready
