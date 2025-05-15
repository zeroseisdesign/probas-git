// botón con id="mostrarBtn" y un párrafo con id="parrafoOculto"
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('mostrarBtn');
    const parrafo = document.getElementById('parrafoOculto');

    // Asegura que el párrafo esté oculto al inicio
    parrafo.style.display = 'none';

    btn.addEventListener('click', function() {
        if (parrafo.style.display === 'none') {
            parrafo.style.display = 'block';
        } else {
            parrafo.style.display = 'none';
        }
    });
});