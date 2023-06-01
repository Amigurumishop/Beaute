// Obtener elementos del DOM
var decrementarBtn = document.getElementById('decrementar');
var incrementarBtn = document.getElementById('incrementar');
var cantidadSpan = document.getElementById('cantidad');

// Manejar el evento click en el botón de decrementar
decrementarBtn.addEventListener('click', function() {
    var cantidad = parseInt(cantidadSpan.textContent);
    if (cantidad > 1) {
        cantidad--;
        cantidadSpan.textContent = cantidad;
    }
});

// Manejar el evento click en el botón de incrementar
incrementarBtn.addEventListener('click', function() {
    var cantidad = parseInt(cantidadSpan.textContent);
    if (cantidad < 10) {
        cantidad++;
        cantidadSpan.textContent = cantidad;
    }
});
