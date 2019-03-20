// Formulärvalidering

$(document).ready(function() {
  // 1. Välj alla inputfält som har attributet required
  // Tips: Använd keyup för att validera medans man skriver
  $("input[required]").blur(validate);
  // 2. Vid blur testa om fältet innehåller minst 3 tecken
  function validate () {
    $(this).val().length < 3
      ? // 3. Visa meddelandet som ligger efter det aktuella fältet
        $(this)
          .siblings(".message")
          .show(500)
      : // 4. Dölj meddelandet om fältet innehåller minst 3 tecken
        $(this)
          .siblings(".message")
          .hide(500);
  }
}); // ready
