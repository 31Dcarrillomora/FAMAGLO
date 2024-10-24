document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault(); // Desactiva el zoom por doble toque
    }
}, { passive: false });


