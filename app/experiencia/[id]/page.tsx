import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Building2,
  Hammer,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  FileText,
  Users,
  PenToolIcon as Tool,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Datos de ejemplo para experiencias detalladas
const experienciasDetalladas = [
  {
    id: 1,
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
      {
        nombre: "Edificio residencial de 15 pisos en San Isidro",
        descripcion:
          "Diseño estructural completo de edificio de lujo con 4 sótanos y 15 pisos. Implementación de sistema dual de pórticos y muros de corte para optimizar el comportamiento sísmico.",
        imagen: "/placeholder.svg?height=200&width=300",
        slug: "analisis-sismico", // Añadir slug para navegación
      },
      {
        nombre: "Centro comercial con estructura mixta acero-concreto",
        descripcion:
          "Diseño de estructura mixta para centro comercial de 3 niveles, con grandes luces y espacios abiertos. Solución innovadora que combina columnas de concreto con vigas y cerchas metálicas.",
        imagen: "/placeholder.svg?height=200&width=300",
        slug: "puente-peatonal", // Añadir slug para navegación
      },
      {
        nombre: "Refuerzo estructural de edificio histórico",
        descripcion:
          "Evaluación y diseño de refuerzo para edificio patrimonial de mampostería no reforzada. Implementación de técnicas no invasivas para preservar el valor arquitectónico.",
        imagen: "/placeholder.svg?height=200&width=300",
        slug: "analisis-sismico", // Añadir slug para navegación
      },
    ],
    logros: [
      "Reducción del 15% en costos de estructura mediante optimización de diseño",
      "Implementación exitosa de BIM en todos los proyectos, mejorando la coordinación interdisciplinaria",
      "Desarrollo de plantillas y procedimientos estandarizados que aumentaron la eficiencia del departamento en un 25%",
    ],
    habilidades: [
      "Análisis Sísmico",
      "Diseño en Concreto Armado",
      "Supervisión de Obra",
      "BIM",
      "ETABS",
      "SAP2000",
      "Revit Structure",
    ],
    software: ["ETABS", "SAP2000", "Revit", "AutoCAD", "Robot Structural Analysis", "MS Project"],
    equipo: 12,
    icono: Building2,
    imagen: "/placeholder.svg?height=500&width=800",
  },
  {
    id: 2,
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
      {
        nombre: "Evaluación estructural de puente vehicular",
        descripcion:
          "Evaluación del estado estructural de puente de 80 metros de luz con más de 40 años de antigüedad. Modelado detallado y análisis de capacidad remanente.",
        imagen: "/placeholder.svg?height=200&width=300",
        slug: "analisis-sismico", // Añadir slug para navegación
      },
      {
        nombre: "Modelado FEM de estructura industrial",
        descripcion:
          "Desarrollo de modelo de elementos finitos para nave industrial con puente grúa de 20 toneladas. Análisis de fatiga y comportamiento dinámico.",
        imagen: "/placeholder.svg?height=200&width=300",
        slug: "analisis-sismico", // Añadir slug para navegación
      },
      {
        nombre: "Análisis de vulnerabilidad sísmica de edificios educativos",
        descripcion:
          "Evaluación de la vulnerabilidad sísmica de 5 edificios educativos construidos antes de la normativa sísmica actual. Propuesta de intervenciones prioritarias.",
        imagen: "/placeholder.svg?height=200&width=300",
        slug: "analisis-sismico", // Añadir slug para navegación
      },
    ],
    logros: [
      "Desarrollo de metodología para evaluación rápida de vulnerabilidad sísmica en edificios educativos",
      "Optimización de procesos de modelado FEM que redujo tiempos de análisis en un 30%",
      "Reconocimiento por mejor informe técnico del año 2021",
    ],
    habilidades: [
      "Modelado FEM",
      "AutoCAD",
      "ETABS",
      "SAP2000",
      "Análisis Estructural",
      "Evaluación de Estructuras Existentes",
    ],
    software: ["ETABS", "SAP2000", "ABAQUS", "AutoCAD", "Excel Avanzado"],
    equipo: 8,
    icono: Hammer,
    imagen: "/placeholder.svg?height=500&width=800",
  },
  {
    id: 3,
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
      {
        nombre: "Viviendas unifamiliares",
        descripcion:
          "Participación en el diseño estructural de 5 viviendas unifamiliares de 2 y 3 niveles. Elaboración de planos de cimentación, columnas y vigas.",
        imagen: "/placeholder.svg?height=200&width=300",
        slug: "analisis-sismico", // Añadir slug para navegación
      },
      {
        nombre: "Pequeños edificios comerciales",
        descripcion:
          "Apoyo en el diseño de 2 edificios comerciales de 3 niveles. Cálculo de elementos estructurales básicos y elaboración de planos.",
        imagen: "/placeholder.svg?height=200&width=300",
        slug: "analisis-sismico", // Añadir slug para navegación
      },
      {
        nombre: "Estructuras de concreto armado para instalaciones industriales",
        descripcion:
          "Colaboración en el diseño de pedestales y losas para maquinaria industrial. Cálculo de cargas y dimensionamiento preliminar.",
        imagen: "/placeholder.svg?height=200&width=300",
        slug: "analisis-sismico", // Añadir slug para navegación
      },
    ],
    logros: [
      "Reconocimiento como mejor practicante del año 2020",
      "Desarrollo de plantilla automatizada para cálculo de elementos estructurales básicos",
      "Participación en más de 15 proyectos en un periodo de 12 meses",
    ],
    habilidades: ["AutoCAD", "Excel Avanzado", "Metrados", "Normativa Estructural", "Dibujo Técnico"],
    software: ["AutoCAD", "Excel", "CYPECAD (nivel básico)"],
    equipo: 5,
    icono: GraduationCap,
    imagen: "/placeholder.svg?height=500&width=800",
  },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = Number.parseInt(params.id)
  const experiencia = experienciasDetalladas.find((exp) => exp.id === id)

  if (!experiencia) {
    return {
      title: "Experiencia no encontrada",
      description: "La experiencia que buscas no existe",
    }
  }

  return {
    title: `${experiencia.cargo} en ${experiencia.empresa} | Experiencia`,
    description: experiencia.descripcion,
  }
}

export default function ExperienciaDetailPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const experiencia = experienciasDetalladas.find((exp) => exp.id === id)

  if (!experiencia) {
    notFound()
  }

  const Icon = experiencia.icono

  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/experiencia">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <Badge className="mb-2 bg-primary text-white">{experiencia.empresa}</Badge>
          <h1 className="text-3xl font-bold text-primary">{experiencia.cargo}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={experiencia.imagen || "/placeholder.svg"}
              alt={experiencia.cargo}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5" />
                <span>{experiencia.periodo}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{experiencia.ubicacion}</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Descripción</TabsTrigger>
                <TabsTrigger value="projects">Proyectos</TabsTrigger>
                <TabsTrigger value="skills">Habilidades</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Descripción General</h2>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">{experiencia.descripcion}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">Responsabilidades</h3>
                  <ul className="mt-2 space-y-2">
                    {experiencia.responsabilidades.map((resp, index) => (
                      <li key={index} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold">Logros</h3>
                  <ul className="mt-2 space-y-2">
                    {experiencia.logros.map((logro, index) => (
                      <li key={index} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                        <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        {logro}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="projects" className="mt-4">
                <h2 className="text-2xl font-bold mb-4">Proyectos Destacados</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {experiencia.proyectos.map((proyecto, index) => (
                    <Link key={index} href={`/proyectos/${proyecto.slug}`} className="block">
                      <Card className="overflow-hidden border-primary/10 dark:border-primary/20 highlight-card hover:shadow-lg transition-all duration-300">
                        <div className="relative h-40 w-full overflow-hidden">
                          <Image
                            src={proyecto.imagen || "/placeholder.svg"}
                            alt={proyecto.nombre}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-bold">{proyecto.nombre}</h3>
                          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{proyecto.descripcion}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="skills" className="mt-4">
                <h2 className="text-2xl font-bold mb-4">Habilidades y Herramientas</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Habilidades Técnicas</h3>
                  <div className="flex flex-wrap gap-2">
                    {experiencia.habilidades.map((habilidad, index) => (
                      <Badge key={index} className="bg-primary/10 text-primary dark:bg-primary/20">
                        {habilidad}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Software y Herramientas</h3>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {experiencia.software.map((sw, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-md border border-zinc-200 p-2 dark:border-zinc-800"
                      >
                        <Tool className="h-4 w-4 text-primary" />
                        <span className="text-sm">{sw}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <Card className="overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
            <div className="h-2 w-full bg-gradient-to-r from-primary to-accent"></div>
            <CardHeader>
              <CardTitle>Información del Puesto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-zinc-500">Cargo</p>
                  <p className="font-medium">{experiencia.cargo}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-zinc-500">Empresa</p>
                  <p className="font-medium">{experiencia.empresa}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-zinc-500">Periodo</p>
                  <p className="font-medium">{experiencia.periodo}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-zinc-500">Ubicación</p>
                  <p className="font-medium">{experiencia.ubicacion}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-zinc-500">Tamaño del equipo</p>
                  <p className="font-medium">{experiencia.equipo} personas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 space-y-4">
            {/* NOTA: Modificar este enlace según sea necesario */}
            <Button className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
              <a
                href="https://drive.google.com/drive/folders/1tJ6Z8SpU-dUBF_UP66pMvrnV4F2rowFA?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" />
                Descargar Certificado
              </a>
            </Button>

            <Button variant="outline" className="w-full gap-2" asChild>
              <Link href="/contacto">Solicitar Referencia</Link>
            </Button>
          </div>

          <Card className="mt-6 overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
            <div className="h-2 w-full bg-gradient-to-r from-accent to-secondary"></div>
            <CardHeader>
              <CardTitle>Experiencias Relacionadas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {experienciasDetalladas
                .filter((exp) => exp.id !== experiencia.id)
                .map((exp) => (
                  <Link key={exp.id} href={`/experiencia/${exp.id}`} className="block">
                    <div className="flex gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
                      <div className="rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">
                        <exp.icono className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{exp.cargo}</h3>
                        <p className="text-sm text-zinc-500">{exp.empresa}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

