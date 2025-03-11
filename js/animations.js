/**
 * Script de animaciones para el portafolio de Amílcar Machacca Mayo
 * Autor: Amílcar Machacca Mayo
 * Versión: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar animaciones al cargar la página
  initAnimations()

  // Configurar animaciones al hacer scroll
  setupScrollAnimations()
})

/**
 * Inicializa las animaciones al cargar la página
 */
function initAnimations() {
  // Animar elementos que deben aparecer inmediatamente
  const heroElements = document.querySelectorAll(".hero .animate-on-scroll")

  if (heroElements.length > 0) {
    let delay = 0

    heroElements.forEach((element) => {
      setTimeout(() => {
        element.classList.add("animate")
      }, delay)

      delay += 200 // Incrementar el retraso para cada elemento
    })
  }
}

/**
 * Configura las animaciones al hacer scroll
 */
function setupScrollAnimations() {
  // Obtener todos los elementos con la clase animate-on-scroll
  const animatedElements = document.querySelectorAll(".animate-on-scroll")

  // Configurar el observador de intersección
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Si el elemento es visible
        if (entry.isIntersecting) {
          // Agregar la clase para animar
          entry.target.classList.add("animate")

          // Dejar de observar el elemento una vez animado
          observer.unobserve(entry.target)
        }
      })
    },
    {
      // Opciones del observador
      threshold: 0.1, // Activar cuando al menos el 10% del elemento es visible
      rootMargin: "0px 0px -50px 0px", // Margen negativo para activar un poco antes
    },
  )

  // Observar cada elemento
  animatedElements.forEach((element) => {
    observer.observe(element)
  })

  // Animar las barras de habilidades cuando sean visibles
  const skillBars = document.querySelectorAll(".skill-level")

  if (skillBars.length > 0) {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Obtener el ancho de la barra desde el estilo inline
            const width = entry.target.style.width

            // Resetear el ancho para la animación
            entry.target.style.width = "0%"

            // Animar la barra después de un pequeño retraso
            setTimeout(() => {
              entry.target.style.transition = "width 1s ease-in-out"
              entry.target.style.width = width
            }, 100)

            // Dejar de observar
            skillObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.5,
      },
    )

    skillBars.forEach((bar) => {
      skillObserver.observe(bar)
    })
  }
}

/**
 * Aplica una animación específica a un elemento
 * @param {HTMLElement} element - Elemento a animar
 * @param {string} animationClass - Clase de animación a aplicar
 * @param {number} delay - Retraso en milisegundos
 */
function animateElement(element, animationClass, delay = 0) {
  setTimeout(() => {
    element.classList.add(animationClass)
  }, delay)
}

/**
 * Anima una secuencia de elementos con retraso
 * @param {NodeList} elements - Lista de elementos a animar
 * @param {string} animationClass - Clase de animación a aplicar
 * @param {number} delayBetween - Retraso entre elementos
 */
function animateSequence(elements, animationClass, delayBetween = 200) {
  let delay = 0

  elements.forEach((element) => {
    animateElement(element, animationClass, delay)
    delay += delayBetween
  })
}

/**
 * Anima elementos al entrar en la vista
 * @param {string} selector - Selector CSS para los elementos
 * @param {string} animationClass - Clase de animación a aplicar
 */
function animateOnScroll(selector, animationClass) {
  const elements = document.querySelectorAll(selector)

  if (elements.length === 0) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  elements.forEach((element) => {
    observer.observe(element)
  })
}

