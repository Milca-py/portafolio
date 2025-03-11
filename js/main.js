/**
 * Script principal para el portafolio de Amílcar Machacca Mayo
 * Autor: Amílcar Machacca Mayo
 * Versión: 1.0
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Referencias a elementos del DOM
  const themeToggle = document.querySelector(".theme-toggle")
  const body = document.body
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const header = document.querySelector(".header")

  // Verificar si existe un tema guardado en localStorage
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    body.classList.add("dark-mode")
  } else if (savedTheme === "light") {
    body.classList.remove("dark-mode")
  } else {
    // Si no hay tema guardado, detectar preferencia del sistema
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDarkMode) {
      body.classList.add("dark-mode")
      localStorage.setItem("theme", "dark")
    }
  }

  // Cambiar tema (claro/oscuro)
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")

    // Guardar preferencia en localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark")
    } else {
      localStorage.setItem("theme", "light")
    }
  })

  // Crear menú móvil dinámicamente
  createMobileMenu()

  // Manejar el menú móvil
  mobileMenuBtn.addEventListener("click", function () {
    this.classList.toggle("active")
    const mobileMenu = document.querySelector(".mobile-menu")
    mobileMenu.classList.toggle("active")

    // Prevenir scroll cuando el menú está abierto
    if (mobileMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  })

  // Cambiar estilo del header al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Manejar formularios
  setupForms()
})

/**
 * Crea el menú móvil dinámicamente
 */
function createMobileMenu() {
  const navLinks = document.querySelector(".nav-links")

  if (!navLinks) return

  const mobileMenu = document.createElement("div")
  mobileMenu.className = "mobile-menu"

  // Clonar los enlaces del menú principal
  const mobileLinks = navLinks.cloneNode(true)

  mobileMenu.appendChild(mobileLinks)
  document.body.appendChild(mobileMenu)

  // Agregar evento para cerrar el menú al hacer clic en un enlace
  const links = mobileMenu.querySelectorAll("a")
  links.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      document.querySelector(".mobile-menu-btn").classList.remove("active")
      document.body.style.overflow = ""
    })
  })
}

/**
 * Configura los formularios de la página
 */
function setupForms() {
  // Formulario de contacto
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Aquí normalmente enviarías los datos a un servidor
      // Para GitHub Pages, podemos usar un servicio como FormSpree

      // Simulamos el envío exitoso
      const formData = new FormData(contactForm)
      const formValues = {}

      formData.forEach((value, key) => {
        formValues[key] = value
      })

      console.log("Formulario enviado:", formValues)

      // Mostrar mensaje de éxito
      showNotification("¡Mensaje enviado con éxito! Te responderé lo antes posible.", "success")

      // Limpiar formulario
      contactForm.reset()
    })
  }

  // Formulario de newsletter
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = newsletterForm.querySelector('input[type="email"]').value

      // Aquí normalmente enviarías el email a un servicio de newsletter
      console.log("Suscripción a newsletter:", email)

      // Mostrar mensaje de éxito
      showNotification("¡Te has suscrito correctamente a mi newsletter!", "success")

      // Limpiar formulario
      newsletterForm.reset()
    })
  }
}

/**
 * Muestra una notificación al usuario
 * @param {string} message - Mensaje a mostrar
 * @param {string} type - Tipo de notificación (success, error, info)
 */
function showNotification(message, type = "info") {
  // Verificar si ya existe una notificación
  let notification = document.querySelector(".notification")

  if (notification) {
    // Si ya existe, eliminarla primero
    notification.remove()
  }

  // Crear nueva notificación
  notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
            <button class="notification-close">&times;</button>
        </div>
    `

  // Agregar al DOM
  document.body.appendChild(notification)

  // Mostrar con animación
  setTimeout(() => {
    notification.classList.add("show")
  }, 10)

  // Configurar botón de cierre
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => {
    notification.classList.remove("show")
    setTimeout(() => {
      notification.remove()
    }, 300)
  })

  // Auto-cerrar después de 5 segundos
  setTimeout(() => {
    if (notification.classList.contains("show")) {
      notification.classList.remove("show")
      setTimeout(() => {
        notification.remove()
      }, 300)
    }
  }, 5000)
}

/**
 * Detecta si el dispositivo es móvil
 * @returns {boolean} - true si es móvil, false si no
 */
function isMobile() {
  return window.innerWidth <= 768
}

// Estilos para la notificación
const notificationStyles = document.createElement("style")
notificationStyles.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        max-width: 350px;
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .notification-content {
        background-color: var(--card-bg);
        color: var(--text-color);
        padding: 15px 20px;
        border-radius: var(--border-radius-md);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification.success .notification-content {
        border-left: 4px solid #10b981;
    }
    
    .notification.error .notification-content {
        border-left: 4px solid #ef4444;
    }
    
    .notification.info .notification-content {
        border-left: 4px solid #3b82f6;
    }
    
    .notification p {
        margin: 0;
        padding-right: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: var(--text-color-light);
    }
`

document.head.appendChild(notificationStyles)

