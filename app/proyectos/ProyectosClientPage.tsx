"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect } from "react"
import Image from "next/image"

// Datos de ejemplo para proyectos
const proyectos = [
  {
    title: "Análisis Sísmico de Edificio Residencial",
    description:
      "Modelado y análisis de un edificio de 12 pisos utilizando métodos de elementos finitos para evaluar su comportamiento ante diferentes escenarios sísmicos.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    category: "Académico",
    slug: "analisis-sismico",
    tags: ["Análisis Sísmico", "FEM", "Edificación"],
  },
  {
    title: "Diseño de Puente Peatonal",
    description:
      "Diseño estructural completo de un puente peatonal con materiales compuestos, optimizando su resistencia y durabilidad en un entorno costero.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop",
    category: "Profesional",
    slug: "puente-peatonal",
    tags: ["Puentes", "Materiales Compuestos", "Diseño Estructural"],
  },
]

// Imágenes para el carrusel
const carouselImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
]

export default function ProyectosClientPage() {
  const categorias = ["Todos", "Académico", "Profesional"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-primary">Proyectos</h1>
      </div>

      {/* Carrusel de imágenes */}
      <div className="relative mb-12 h-[400px] w-full overflow-hidden rounded-xl">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Proyecto destacado ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-bold">Proyectos de Ingeniería Estructural</h2>
              <p className="mt-2 max-w-2xl text-lg">
                Soluciones innovadoras y sostenibles para desafíos estructurales complejos
              </p>
              <Button className="mt-4" asChild>
                <a href="/proyecto-presentacion.pdf" target="_blank" rel="noopener noreferrer">
                  Descargar Presentación
                </a>
              </Button>
            </div>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 w-2 rounded-full ${i === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                  onClick={() => setCurrentImageIndex(i)}
                ></button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Tabs defaultValue="Todos" className="mb-8">
        <TabsList className="mb-4">
          {categorias.map((categoria) => (
            <TabsTrigger key={categoria} value={categoria}>
              {categoria}
            </TabsTrigger>
          ))}
        </TabsList>

        {categorias.map((categoria) => (
          <TabsContent key={categoria} value={categoria}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {proyectos
                .filter((proyecto) => categoria === "Todos" || proyecto.category === categoria)
                .map((proyecto, index) => (
                  <ProjectCard
                    key={index}
                    title={proyecto.title}
                    description={proyecto.description}
                    image={proyecto.image}
                    category={proyecto.category}
                    slug={proyecto.slug}
                    tags={proyecto.tags}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

