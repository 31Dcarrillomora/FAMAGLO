//----------------------Loader------------------------------//
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
  
  //-----------------------Contorno externo para (titulo-tarjetas-Famaglo)------------------------------------------//
  
 // Seleccionamos todos los elementos con la clase 'Titulo-tarjetas-Famaglo'
const titulos = document.getElementsByClassName('Titulo-tarjetas-Famaglo');

/**
 * Función para aplicar el contorno exterior al texto utilizando sombras (text-shadow).
 *
 * @param {HTMLElement} element - El elemento al que se aplicará el contorno.
 * @param {string} color - El color del contorno (por ejemplo, negro #000).
 * @param {number} size - El tamaño del contorno en píxeles (en este caso, 5px).
 */
function applyOutline(element, color, size) {
    const shadows = []; // Array para almacenar las sombras

    // Bucle anidado para generar las sombras alrededor del texto
    for (let x = -size; x <= size; x++) {
        for (let y = -size; y <= size; y++) {
            if (x !== 0 || y !== 0) {
                // Agregamos las sombras a la lista, desplazando en cada dirección
                shadows.push(`${x}px ${y}px 0 ${color}`);
            }
        }
    }

    // Aplicamos las sombras generadas al estilo text-shadow del elemento
    element.style.textShadow = shadows.join(', ');
}

// Aplicamos la función de contorno a todos los elementos con la clase 'Titulo-tarjetas-Famaglo'
for (let i = 0; i < titulos.length; i++) {
    applyOutline(titulos[i], '#000', 5); // Contorno negro de 5px
}
