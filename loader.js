window.addEventListener('load', function() {
  // Comprueba si el loader ya se ha mostrado
  if (!sessionStorage.getItem('loaderShown')) {
      setTimeout(function() {
          document.body.classList.add('loaded');
          sessionStorage.setItem('loaderShown', 'true'); // Marca que el loader se ha mostrado
      }, 2000); // Cambia este valor para el tiempo de animación
  } else {
      document.body.classList.add('loaded'); // Muestra directamente el contenido si ya se ha mostrado el loader
  }
});