/* Griglia 6x6, ad ogni click parte una richiesta AJAX che
prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato
diventa verde.
Il numero ottenuto appare al centro del quadrato */

$( document ).ready(function () {

  // Ad ogni click parte una richiesta Ajax
  $(".quadro").one("click", function () {
    var cliccato = $(this);
    // Richiediamo via ajax all'API un numero random
    $.ajax({
      url : "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data) {
        var numapi = data.response;
        // Verifichiamo se il numero è > o < di 5
        if (numapi <= 5) {
          $(cliccato).addClass("yellow");
          $(cliccato).text(numapi);
        } else if (numapi > 5) {
          $(cliccato).addClass("green");
          $(cliccato).text(numapi);
        }
      },
      error: function (errore) {
        alert ("C'è stato un errore: " + errore);
      }
    });
  });

});
