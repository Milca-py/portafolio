"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Building2, Hammer, GraduationCap, Calendar, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface Experiencia {
  cargo: string
  empresa: string
  periodo: string
  ubicacion: string
  descripcion: string
  responsabilidades: string[]
  proyectos: string[]
  habilidades: string[]
  icono: any
  imagen: string
}

export default function ExperienciaClientPage() {
  const experiencias: Experiencia[] = [
    {
      cargo: "Ingeniero Estructural",
      empresa: "Constructora XYZ",
      periodo: "2022 - Presente",
      ubicacion: "Lima, Perú",
      descripcion:
        "Diseño estructural de edificios residenciales y comerciales. Supervisión de obra y control de calidad. Coordinación con equipos multidisciplinarios para la ejecución de proyectos.",
      responsabilidades: [
        "Desarrollo de modelos estructurales y análisis sísmico de edificaciones",
        "Elaboración de planos estructurales y memorias de cálculo",
        "Supervisión técnica durante la ejecución de obras",
        "Coordinación con arquitectos e ingenieros de otras especialidades",
        "Implementación de soluciones estructurales innovadoras y sostenibles",
      ],
      proyectos: [
        "Edificio residencial de 15 pisos en San Isidro",
        "Centro comercial con estructura mixta acero-concreto",
        "Refuerzo estructural de edificio histórico",
      ],
      habilidades: ["Análisis Sísmico", "Diseño en Concreto Armado", "Supervisión de Obra"],
      icono: Building2,
      imagen: "/placeholder.svg?height=300&width=500",
    },
    {
      cargo: "Asistente de Ingeniería",
      empresa: "Consultora ABC",
      periodo: "2020 - 2022",
      ubicacion: "Arequipa, Perú",
      descripcion:
        "Modelado estructural, análisis de elementos finitos y elaboración de planos estructurales. Participación en proyectos de refuerzo estructural y evaluación de estructuras existentes.",
      responsabilidades: [
        "Desarrollo de modelos de elementos finitos para análisis estructural",
        "Elaboración de planos estructurales bajo supervisión",
        "Evaluación de estructuras existentes y propuestas de refuerzo",
        "Preparación de informes técnicos y memorias de cálculo",
        "Investigación de nuevas metodologías y tecnologías estructurales",
      ],
      proyectos: [
        "Evaluación estructural de puente vehicular",
        "Modelado FEM de estructura industrial",
        "Análisis de vulnerabilidad sísmica de edificios educativos",
      ],
      habilidades: ["Modelado FEM", "AutoCAD", "ETABS", "SAP2000"],
      icono: Hammer,
      imagen: "/placeholder.svg?height=300&width=500",
    },
    {
      cargo: "Practicante de Ingeniería",
      empresa: "Oficina de Proyectos DEF",
      periodo: "2019 - 2020",
      ubicacion: "Cusco, Perú",
      descripcion:
        "Apoyo en el desarrollo de planos estructurales, cálculos básicos y revisión de documentación técnica. Participación en visitas a obra y levantamiento de información.",
      responsabilidades: [
        "Asistencia en la elaboración de planos estructurales",
        "Cálculos estructurales básicos bajo supervisión",
        "Revisión de documentación técnica y normativa",
        "Participación en visitas a obra y levantamiento de información",
        "Apoyo en la preparación de presupuestos y metrados",
      ],
      proyectos: [
        "Viviendas unifamiliares",
        "Pequeños edificios comerciales",
        "Estructuras de concreto armado para instalaciones industriales",
      ],
      habilidades: ["AutoCAD", "Excel Avanzado", "Metrados", "Normativa Estructural"],
      icono: GraduationCap,
      imagen: "/placeholder.svg?height=300&width=500",
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
        <h1 className="text-3xl font-bold text-primary">Experiencia Profesional</h1>
      </div>

      <div className="relative space-y-12">
        {/* Línea de tiempo vertical */}
        <div className="absolute left-[9px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary md:left-1/2 md:-ml-0.5"></div>

        {experiencias.map((exp, index) => {
          const Icon = exp.icono
          const isEven = index % 2 === 0

          return (
            <div key={index} className="relative">
              {/* Punto en la línea de tiempo */}
              <div className="absolute left-0 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-primary md:left-1/2 md:-ml-2.5">
                <Icon className="h-3 w-3 text-primary" />
              </div>

              {/* Tarjeta de experiencia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative ml-8 md:ml-0 md:w-1/2 ${isEven ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}
              >
                <Link href={`/experiencia/${index + 1}`}>
                  <Card className="overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
                    <div className="h-2 w-full bg-gradient-to-r from-primary via-accent to-secondary"></div>
                    <CardContent className="p-0">
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={exp.imagen || "/placeholder.svg"}
                          alt={exp.cargo}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <h2 className="text-2xl font-bold">{exp.cargo}</h2>
                          <p className="text-zinc-200">{exp.empresa}</p>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="mb-4 flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{exp.periodo}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{exp.ubicacion}</span>
                          </div>
                        </div>

                        <p className="mb-4 text-zinc-600 dark:text-zinc-300">{exp.descripcion}</p>

                        <div className="mb-4">
                          <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">Habilidades:</h3>
                          <div className="flex flex-wrap gap-2">
                            {exp.habilidades.map((habilidad, idx) => (
                              <Badge key={idx} variant="outline" className="bg-zinc-100 dark:bg-zinc-800">
                                {habilidad}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button variant="outline" size="sm" className="w-full gap-1">
                          <Briefcase className="h-4 w-4" />
                          Ver detalles
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

