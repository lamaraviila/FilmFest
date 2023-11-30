document.addEventListener('DOMContentLoaded', () => {
  const buscador = document.getElementById('buscador');
  const peliculas = document.querySelectorAll('.cartelera');

  buscador.addEventListener('input', () => {
      const busquedaUsuario = buscador.value.toLowerCase();
      
      // Filtrar las películas según la búsqueda del usuario
      peliculas.forEach((card, index) => {
          const tituloPelicula = card.getAttribute('name');
          
          if (tituloPelicula.includes(busquedaUsuario)) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });

      // Obtener un array de nombres de películas que coinciden con la búsqueda del usuario
      const nombresPeliculasFiltradas = Array.from(peliculas)
          .filter(card => card.style.display !== 'none')
          .map(card => card.getAttribute('name'));

      // Ordenar alfabéticamente los nombres de películas filtradas
      nombresPeliculasFiltradas.sort((a, b) => a.localeCompare(b));

      // Reordenar las películas visibles en la página en orden alfabético
      nombresPeliculasFiltradas.forEach((nombre, index) => {
          const elemento = Array.from(peliculas).find(card => card.getAttribute('name') === nombre);
          if (elemento) {
              elemento.style.order = index;
          }
      });
  });
});

