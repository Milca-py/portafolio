/**
 * Script para la página de contacto de Amílcar Machacca Mayo
 * Autor: Amílcar Machacca Mayo
 * Versión: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar validación del formulario de contacto
  initContactFormValidation()

  // Inicializar animaciones de la página de contacto
  initContactAnimations()
})

/**
 * Inicializa la validación del formulario de contacto
 */
function initContactFormValidation() {
  const contactForm = document.getElementById("contact-form")

  if (!contactForm) return

  // Agregar evento submit al formulario
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Validar campos del formulario
    if (validateContactForm(contactForm)) {
      // Si la validación es exitosa, simular envío
      simulateFormSubmission(contactForm)
    }
  })

  // Agregar validación en tiempo real a los campos
  const formInputs = contactForm.querySelectorAll("input, textarea")

  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this)
    })

    input.addEventListener("input", function () {
      // Remover mensaje de error si el usuario comienza a corregir
      const errorElement = this.parentElement.querySelector(".error-message")
      if (errorElement) {
        errorElement.remove()
        this.classList.remove("error")
      }
    })
  })
}

/**
 * Valida el formulario de contacto
 * @param {HTMLFormElement} form - Formulario a validar
 * @returns {boolean} - true si el formulario es válido, false si no
 */
function validateContactForm(form) {
  const nameInput = form.querySelector("#name")
  const emailInput = form.querySelector("#email")
  const subjectInput = form.querySelector("#subject")
  const messageInput = form.querySelector("#message")

  let isValid = true

  // Validar nombre
  if (!validateField(nameInput)) {
    isValid = false
  }

  // Validar email
  if (!validateField(emailInput)) {
    isValid = false
  }

  // Validar asunto
  if (!validateField(subjectInput)) {
    isValid = false
  }

  // Validar mensaje
  if (!validateField(messageInput)) {
    isValid = false
  }

  return isValid
}

/**
 * Valida un campo individual del formulario
 * @param {HTMLInputElement|HTMLTextAreaElement} field - Campo a validar
 * @returns {boolean} - true si el campo es válido, false si no
 */
function validateField(field) {
  // Remover mensaje de error previo
  const existingError = field.parentElement.querySelector(".error-message")
  if (existingError) {
    existingError.remove()
  }

  field.classList.remove("error")

  // Validar según el tipo de campo
  if (field.value.trim() === "") {
    // Campo vacío
    showFieldError(field, "Este campo es obligatorio")
    return false
  }

  // Validación específica para email
  if (field.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(field.value)) {
      showFieldError(field, "Por favor, introduce un email válido")
      return false
    }
  }

  return true
}

/**
 * Muestra un mensaje de error para un campo
 * @param {HTMLInputElement|HTMLTextAreaElement} field - Campo con error
 * @param {string} message - Mensaje de error
 */
function showFieldError(field, message) {
    field.classList.add('error');

