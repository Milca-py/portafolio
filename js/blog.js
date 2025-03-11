/**
 * Script para la página de blog de Amílcar Machacca Mayo
 * Autor: Amílcar Machacca Mayo
 * Versión: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar filtros de blog
  initBlogFilters()

  // Inicializar búsqueda de artículos
  initBlogSearch()

  // Inicializar paginación
  initPagination()
})

/**
 * Inicializa los filtros de artículos del blog
 */
function initBlogFilters() {
  const filterButtons = document.querySelectorAll(".blog-filter .filter-btn")
  const articleCards = document.querySelectorAll(".article-card")

  if (filterButtons.length === 0 || articleCards.length === 0) return

  // Agregar evento click a cada botón de filtro
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover clase active de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Agregar clase active al botón clickeado
      this.classList.add("active")

      // Obtener categoría a filtrar
      const filterValue = this.getAttribute("data-filter")

      // Filtrar artículos
      articleCards.forEach((card) => {
        if (filterValue === "all") {
          // Mostrar todos los artículos
          card.style.display = "block"

          // Animar entrada con un pequeño retraso
          setTimeout(() => {
            card.classList.add("animate")
          }, 100)
        } else {
          // Verificar si el artículo pertenece a la categoría
          if (card.getAttribute("data-category") === filterValue) {
            card.style.display = "block"

            // Animar entrada con un pequeño retraso
            setTimeout(() => {
              card.classList.add("animate")
            }, 100)
          } else {
            // Ocultar artículo
            card.classList.remove("animate")
            card.style.display = "none"
          }
        }
      })
    })
  })
}

/**
 * Inicializa la búsqueda de artículos
 */
function initBlogSearch() {
  const searchInput = document.getElementById("blog-search-input")
  const searchButton = document.getElementById("blog-search-btn")
  const articleCards = document.querySelectorAll(".article-card")

  if (!searchInput || !searchButton || articleCards.length === 0) return

  // Función para realizar la búsqueda
  const performSearch = () => {
    const searchTerm = searchInput.value.toLowerCase().trim()

    if (searchTerm === "") {
      // Si no hay término de búsqueda, mostrar todos los artículos
      articleCards.forEach((card) => {
        card.style.display = "block"

        // Animar entrada
        setTimeout(() => {
          card.classList.add("animate")
        }, 100)
      })

      return
    }

    // Filtrar artículos según el término de búsqueda
    articleCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase()
      const content = card.querySelector("p").textContent.toLowerCase()

      if (title.includes(searchTerm) || content.includes(searchTerm)) {
        card.style.display = "block"

        // Animar entrada
        setTimeout(() => {
          card.classList.add("animate")
        }, 100)
      } else {
        card.classList.remove("animate")
        card.style.display = "none"
      }
    })
  }

  // Evento click en el botón de búsqueda
  searchButton.addEventListener("click", performSearch)

  // Evento al presionar Enter en el input
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch()
    }
  })
}

/**
 * Inicializa la paginación
 */
function initPagination() {
  const paginationButtons = document.querySelectorAll(".pagination-btn")

  if (paginationButtons.length === 0) return

  // Agregar evento click a cada botón de paginación
  paginationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover clase active de todos los botones
      paginationButtons.forEach((btn) => btn.classList.remove("active"))

      // Agregar clase active al botón clickeado
      if (!this.classList.contains("next")) {
        this.classList.add("active")
      }

      // Aquí normalmente cargarías los artículos de la página seleccionada
      // Para este ejemplo, simplemente mostramos un mensaje en consola
      console.log("Cambiar a página:", this.textContent)

      // Simular carga de nuevos artículos
      simulatePageChange()
    })
  })
}

/**
 * Simula el cambio de página con una animación
 */
function simulatePageChange() {
  const articlesGrid = document.querySelector(".articles-grid")
  const articleCards = document.querySelectorAll(".article-card")

  if (!articlesGrid || articleCards.length === 0) return

  // Animar salida de los artículos actuales
  articleCards.forEach((card) => {
    card.classList.remove("animate")
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
  })

  // Simular carga de nuevos artículos después de un retraso
  setTimeout(() => {
    // Animar entrada de los "nuevos" artículos
    articleCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }, index * 100)
    })
  }, 500)
}

// Estilos adicionales para las animaciones de los artículos
const blogStyles = document.createElement("style")
blogStyles.textContent = `
    .article-card {
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .featured-article-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .featured-article-card.animate {
        opacity: 1;
        transform: translateY(0);
    }
`

document.head.appendChild(blogStyles)

