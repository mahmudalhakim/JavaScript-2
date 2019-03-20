$(document).ready(function () {
  // Hämta element
  let $item = $("#newItem");
  let $addBtn = $("#addBtn");
  let $table = $("#table");

  // Kör funktionen addItem vid klick på knappen
  $addBtn.click(addItem);

  // Kör funktionen addItem vid Retur (Enter)
  $item.keypress(function(e) {
    // console.log(e);
    if (e.which == 13) {
      addItem();
    }
  });

  function addItem() {
    $value = $item.val();
    if ($value !== "") {
      let html = `<tr>
            <td><input type="checkbox" class="done"></td>
            <td>${$value}</td>
            <td><button class="btn btn-sm btn-outline-danger delete">Ta bort</button></td>
            </tr>`;
      $table.append(html);
      $item.val("");
    }
  }

  // Ta bort en rad vid klick på knappen "Ta bort"
  // Försök 1
  $(".delete").click(function() {
    $(this).remove();
    // OBS! Funkar inte
    // Metoden click fungerar enbart med befintliga element
    // Vi har ju dynamiska element som läggs till senare!
  });

  // Lösning: använd metoden on istället
  // Vid klick på knappen som har klassen delete
  $table.on("click", ".delete", function(e) {
    // Ta bort det aktuella raden
    $(this)
      .parentsUntil("table")
      .remove();
  });

  // Stryk över en ikryssad rad
  $table.on("click", ".done", function(e) {
    $(this)
      .parentsUntil("table")
      .toggleClass("strike");
  });
}); // ready
