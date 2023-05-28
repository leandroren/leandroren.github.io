// Función para desplazarse hacia abajo al hacer clic en el botón nav

  document.getElementById("btn-up").addEventListener("click", function() {
    document.querySelector("#header").scrollIntoView({
        behavior: "smooth"
    });
});
  
  
  // Función para desplazarse hacia arriba al hacer clic en el botón scroll-top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



