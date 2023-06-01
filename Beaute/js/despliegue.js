// Obtener el enlace "Mi" y las opciones
var miLink = document.querySelector('.nav-link[href=""]');
var subMenu = document.querySelector('.sub-menu');

// Agregar un evento al enlace "Mi" para mostrar/ocultar las opciones
miLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  subMenu.classList.toggle('show');
});
