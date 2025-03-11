import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import SoftwareCard from "@/components/software-card"

export const metadata: Metadata = {
  title: "Software | Portafolio de Ingeniería Estructural",
  description: "Desarrollo de software y herramientas para ingeniería estructural",
}

export default function SoftwarePage() {
  // Datos de ejemplo para proyectos de software (solo 2)
  const proyectos = [
    {
      title: "StructPy",
      description: "Librería Python para análisis estructural básico y cálculo de elementos",
      language: "Python",
      repo: "https://github.com/username/structpy",
      slug: "structpy",
    },
    {
      title: "BeamCalc",
      description: "Aplicación web para cálculo y diseño de vigas con diferentes condiciones de carga",
      language: "JavaScript",
      repo: "https://github.com/username/beamcalc",
      slug: "beamcalc",
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
        <h1 className="text-3xl font-bold text-primary">Desarrollo de Software</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {proyectos.map((proyecto, index) => (
          <SoftwareCard
            key={index}
            title={proyecto.title}
            description={proyecto.description}
            language={proyecto.language}
            repo={proyecto.repo}
            slug={proyecto.slug}
          />
        ))}
      </div>
    </div>
  )
}

