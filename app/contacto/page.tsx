"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Send, Github, Linkedin, MapPin, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export default function ContactoPage() {
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulación de envío de correo (en producción, reemplazar con EmailJS o similar)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Guardar en localStorage como alternativa temporal
      const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]")
      messages.push({
        ...formData,
        date: new Date().toISOString(),
      })
      localStorage.setItem("contactMessages", JSON.stringify(messages))

      console.log("Mensaje guardado:", formData)

      setIsSuccess(true)
      toast({
        title: "Mensaje guardado",
        description: "Tu mensaje ha sido guardado. Te responderé lo antes posible.",
      })

      // Resetear el formulario después de 3 segundos
      setTimeout(() => {
        setFormData({
          nombre: "",
          email: "",
          asunto: "",
          mensaje: "",
        })
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error al enviar el mensaje:", error)
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-primary">Contacto</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
              <div className="h-2 w-full bg-primary"></div>
              <CardHeader>
                <CardTitle className="text-2xl">Envíame un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario para contactarme sobre proyectos, colaboraciones o consultas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                    <h3 className="text-xl font-bold">¡Mensaje enviado con éxito!</h3>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                      Gracias por contactarme. Te responderé lo antes posible.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input
                          id="nombre"
                          name="nombre"
                          placeholder="Tu nombre"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          className="border-zinc-200 focus:border-primary dark:border-zinc-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="border-zinc-200 focus:border-primary dark:border-zinc-800"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="asunto">Asunto</Label>
                      <Input
                        id="asunto"
                        name="asunto"
                        placeholder="Asunto de tu mensaje"
                        required
                        value={formData.asunto}
                        onChange={handleChange}
                        className="border-zinc-200 focus:border-primary dark:border-zinc-800"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        placeholder="Escribe tu mensaje aquí..."
                        rows={6}
                        required
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="border-zinc-200 focus:border-primary dark:border-zinc-800"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          Enviar mensaje <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
              <div className="h-2 w-full bg-secondary"></div>
              <CardHeader>
                <CardTitle className="text-2xl">Información de contacto</CardTitle>
                <CardDescription>Puedes contactarme a través de los siguientes medios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=200190@unsaac.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-start gap-3 rounded-lg p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Email</p>
                    <p className="font-medium">200190@unsaac.edu.pe</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Milca-py"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-start gap-3 rounded-lg p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">GitHub</p>
                    <p className="font-medium">github.com/Milca-py</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/amilcar-machacca-mayo-7635622a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-start gap-3 rounded-lg p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">LinkedIn</p>
                    <p className="font-medium">AMILCAR MACHACCA MAYO</p>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/Yd5Yd5Yd5Yd5Yd5Yd5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-start gap-3 rounded-lg p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Ubicación</p>
                    <p className="font-medium">Cusco, Perú</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/51987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-start gap-3 rounded-lg p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Teléfono</p>
                    <p className="font-medium">+51 987 654 321</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
              <div className="h-2 w-full bg-accent"></div>
              <CardHeader>
                <CardTitle>Horario de disponibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-zinc-500 dark:text-zinc-400">Lunes - Viernes</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 dark:text-zinc-400">Sábado</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 dark:text-zinc-400">Domingo</span>
                    <span className="font-medium">Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

