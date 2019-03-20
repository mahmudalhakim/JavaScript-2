// Manipulera CSS med jQuery

$(document).ready(function() {
  // Lägg till eller ändra en CSS-egenskap
  $("#demo1").click(function() {
    $(".demo1").css("color", "pink");
  });

  // Lägg till eller ändra flera CSS-egenskaper
  $("#demo2").click(function() {
    $(".demo2").css({
      color: "#FFF",
      "background-color": "#000",
      "font-size": "2em"
    });
    // Hämta CSS-egenskaper
    let $myColor = $(".demo2").css("color");
    console.log($myColor);
  });

  // Lägg till en CSS-Klass
  $("#demo3").click(function() {
    $(".demo3").addClass("blue");
  });

  // Lägg till BS-Klasser
  $("#demo4").click(function() {
    $(".demo4").addClass("alert alert-success");
  });
  // Ta bort BS-Klasser
  $("#demo5").click(function() {
    $(".demo4").removeClass("alert alert-success");
  });

  // Växla CSS-Klasser (toggle)
  $("#demo6").click(function() {
    $(".demo4").toggleClass("alert alert-success");
  });

  // Växla CSS-Klasser och ändra text på knappen
  $("#demo7").click(function() {
    $(".demo4").toggleClass("alert alert-success");

    // Ändra text på knappen
    // Ternary Operator ? :
    $(this).text() === "Lägg till klassen alert"
      ? $(this).text("Ta bort klassen alert")
      : $(this).text("Lägg till klassen alert");

    // Ändra färg på knappen
    $(this).toggleClass("btn-primary btn-danger");
  });

  // Visa alla knapper med BS klasserna btn och btn-primary
  $("button").addClass("btn btn-primary mb-1");
}); // ready
