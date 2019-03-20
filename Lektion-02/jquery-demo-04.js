// Formulärvalidering

$(document).ready(function() {
  // 1. Välj alla inputfält som har attributet required
  $("input[required]").keypress(function() {
    // 2. Vid blur testa om fältet innehåller minst 3 tecken
    $(this).val().length < 3
      ? // 3. Visa meddelandet som ligger efter det aktuella fältet
        $(this)
          .siblings(".message")
          .show(500)
      : // 4. Dölj meddelandet om fältet innehåller minst 3 tecken
        $(this)
          .siblings(".message")
          .hide(500);
  });
});
