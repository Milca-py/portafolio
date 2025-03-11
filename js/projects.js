/**
 * Script para la página de proyectos de Amílcar Machacca Mayo
 * Autor: Amílcar Machacca Mayo
 * Versión: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar filtros de proyectos
  initProjectFilters()

  // Inicializar modales de proyectos
  initProjectModals()
})

/**
 * Inicializa los filtros de proyectos
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectItems = document.querySelectorAll(".project-item")

  if (filterButtons.length === 0 || projectItems.length === 0) return

  // Agregar evento click a cada botón de filtro
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover clase active de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Agregar clase active al botón clickeado
      this.classList.add("active")

      // Obtener categoría a filtrar
      const filterValue = this.getAttribute("data-filter")

      // Filtrar proyectos
      projectItems.forEach((item) => {
        if (filterValue === "all") {
          // Mostrar todos los proyectos
          item.style.display = "block"

          // Animar entrada con un pequeño retraso
          setTimeout(() => {
            item.classList.add("animate")
          }, 100)
        } else {
          // Verificar si el proyecto pertenece a la categoría
          if (item.getAttribute("data-category") === filterValue) {
            item.style.display = "block"

            // Animar entrada con un pequeño retraso
            setTimeout(() => {
              item.classList.add("animate")
            }, 100)
          } else {
            // Ocultar proyecto
            item.classList.remove("animate")
            item.style.display = "none"
          }
        }
      })
    })
  })
}

/**
 * Inicializa los modales de proyectos
 */
function initProjectModals() {
  const detailButtons = document.querySelectorAll(".project-details-btn")
  const modals = document.querySelectorAll(".project-modal")
  const closeButtons = document.querySelectorAll(".close-modal")

  if (detailButtons.length === 0) return

  // Abrir modal al hacer clic en el botón de detalles
  detailButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // Obtener el modal asociado al proyecto
      const projectItem = this.closest(".project-item")
      const modal = projectItem.querySelector(".project-modal")

      if (modal) {
        // Mostrar modal
        modal.style.display = "block"

        // Prevenir scroll en el body
        document.body.style.overflow = "hidden"

        // Animar entrada del contenido
        const modalContent = modal.querySelector(".modal-content")
        modalContent.classList.add("animate")
      }
    })
  })

  // Cerrar modal al hacer clic en el botón de cierre
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".project-modal")

      if (modal) {
        // Ocultar modal
        modal.style.display = "none"

        // Restaurar scroll en el body
        document.body.style.overflow = ""

        // Remover animación del contenido
        const modalContent = modal.querySelector(".modal-content")
        modalContent.classList.remove("animate")
      }
    })
  })

  // Cerrar modal al hacer clic fuera del contenido
  modals.forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        // Ocultar modal
        this.style.display = "none"

        // Restaurar scroll en el body
        document.body.style.overflow = ""

        // Remover animación del contenido
        const modalContent = this.querySelector(".modal-content")
        modalContent.classList.remove("animate")
      }
    })
  })

  // Cerrar modal con la tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modals.forEach((modal) => {
        if (modal.style.display === "block") {
          // Ocultar modal
          modal.style.display = "none"

          // Restaurar scroll en el body
          document.body.style.overflow = ""

          // Remover animación del contenido
          const modalContent = modal.querySelector(".modal-content")
          modalContent.classList.remove("animate")
        }
      })
    }
  })
}

// Estilos adicionales para las animaciones de los modales
const modalStyles = document.createElement("style")
modalStyles.textContent = `
    .modal-content {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .modal-content.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .project-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .project-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
`

document.head.appendChild(modalStyles)

