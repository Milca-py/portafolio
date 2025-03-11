import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Blog | Portafolio de Ingeniería Estructural",
  description: "Artículos e investigaciones sobre ingeniería estructural",
}

export default function BlogPage() {
  // Datos de ejemplo para artículos del blog
  const articulos = [
    {
      title: "Avances en Análisis No Lineal de Estructuras",
      description: "Exploración de métodos modernos para el análisis no lineal de estructuras complejas",
      date: "15 Feb 2023",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      slug: "analisis-no-lineal",
    },
    {
      title: "Materiales Compuestos en Ingeniería Estructural",
      description: "Aplicaciones y ventajas de los materiales compuestos en proyectos estructurales",
      date: "3 Ene 2023",
      image: "https://images.unsplash.com/photo-1581092921461-39b9d904ee84?q=80&w=2070&auto=format&fit=crop",
      slug: "materiales-compuestos",
    },
  ]

  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-primary">Blog e Investigaciones</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {articulos.map((articulo, index) => (
          <BlogCard
            key={index}
            title={articulo.title}
            description={articulo.description}
            date={articulo.date}
            image={articulo.image}
            slug={articulo.slug}
          />
        ))}
      </div>
    </div>
  )
}

