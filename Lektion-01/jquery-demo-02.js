// jQuery Selectors

$(document).ready(function(){

    // Type Selector
    // $('p').hide();

    // ID Selector
    $('#demo').hide();

    // Class Selector
    $('.demo').hide();

    // Universal Selector
    // $('*').hide();

    // Group of selectors
    $('h4,h5,#group-demo, .group-demo').hide();

    // Descendant combinator
    // Välj alla länkar som finns i alla listor
    $('li a').hide();
    // Välj alla länkar som finns i en specifik lista
    $('#menu a').hide();

    // Child combinators
    // Ta bort alla barnelement av typen p 
    // som finns direkt under en div
    $('div > p').hide();

    // Sibling combinators
    // $('div + p').hide();

    // Subsequent-sibling combinator
    $('article ~ p').hide();

    // This Selector (OBS! Viktigt)
    $('p').click(function(){
        $(this).hide();
    });

    // Tips:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
    // https://www.w3schools.com/jquery/jquery_ref_selectors.asp
    

}); // avsluta ready