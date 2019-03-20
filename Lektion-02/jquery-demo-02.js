// Arbeta med events

$(document).ready(function () {

// Click 
$('#demo1').click(function () {
    $(this).hide();
});

// dblclick 
$('#demo2').dblclick(function () {
    $(this).hide();
});

// Mouseenter
$('#demo3').mouseenter(function () {
    $(this).html('Demo på mouseenter');
});

// Mouseout
$('#demo3').mouseout(function () {
    $(this).html('Demo på mouseout');
});

// Fråga: Vad är skillnaden mellan mouseout och mouseleave
// Mycket bra svar finns här:
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseleave_mouseout


// Mousedown
$('#demo4').mousedown(function () {
    $(this).html('Demo på mousedown');
})
// Mouseup
$('#demo4').mouseup(function () {
    $(this).html('Demo på mouseout');
})

// Hover        
$('#demo5').hover(inFun, outFun);
function inFun() {
    $(this).css('background-color', 'yellow');
}
function outFun() {
    $(this).css('background-color', 'pink');
}

// Hover : alternativ syntax
$('#demo5').hover(function () {
    $(this).css('background-color', 'yellow');
}, function () {
    $(this).css('background-color', 'pink');
});

// Focus och Blur
$('#demo6 input').focus(function () {
    $(this).css('background-color' , 'gold');
});
$('input').blur(function () {
    $(this).css('background-color' , '#FFF');
});

// Metoden on
$('#demo7')
    .on('click', function () {
        $(this).html('Click har aktiverats');
    })
    .on('dblclick', function (){
        $(this).html('dblclick har aktiverats');
    })

}); // ready