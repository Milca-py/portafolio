"use client"

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, FileText, Building, Code2, Ruler, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Datos de ejemplo para proyectos detallados
const proyectosDetallados = {
  "analisis-sismico": {
    title: "Análisis Sísmico de Edificio Residencial",
    description:
      "Modelado y análisis de un edificio de 12 pisos utilizando métodos de elementos finitos para evaluar su comportamiento ante diferentes escenarios sísmicos.",
    category: "Académico",
    date: "Junio 2022",
    client: "Universidad Nacional de Ingeniería",
    location: "Lima, Perú",
    mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    tags: ["Análisis Sísmico", "FEM", "Edificación"],
    overview:
      "Este proyecto académico consistió en el análisis sísmico detallado de un edificio residencial de 12 pisos ubicado en una zona de alta sismicidad. El objetivo principal fue evaluar el comportamiento estructural del edificio ante diferentes escenarios sísmicos y verificar el cumplimiento de los requisitos normativos vigentes.",
    objectives: [
      "Desarrollar un modelo estructural detallado utilizando software especializado",
      "Realizar análisis modal espectral según la normativa sísmica local",
      "Evaluar el comportamiento de la estructura ante diferentes escenarios sísmicos",
      "Verificar el cumplimiento de los límites de desplazamiento lateral",
      "Proponer mejoras al diseño estructural para optimizar su respuesta sísmica",
    ],
    methodology:
      "Se desarrolló un modelo tridimensional detallado utilizando el software ETABS, considerando todos los elementos estructurales (columnas, vigas, losas, muros de corte) y sus propiedades mecánicas. Se realizó un análisis modal espectral utilizando el espectro de diseño de la norma E.030 de Diseño Sismorresistente. Adicionalmente, se efectuaron análisis tiempo-historia utilizando registros sísmicos compatibles con el espectro de diseño para evaluar la respuesta dinámica de la estructura.",
    results:
      "Los resultados del análisis modal mostraron que la estructura presenta un periodo fundamental de 1.2 segundos, con un modo predominantemente traslacional. Los desplazamientos laterales máximos fueron de 0.006 en la dirección X y 0.005 en la dirección Y, cumpliendo con los límites establecidos por la normativa (0.007). El análisis tiempo-historia confirmó que las demandas de ductilidad en los elementos estructurales se mantienen dentro de los rangos aceptables.",
    conclusions:
      "El edificio analizado presenta un comportamiento sísmico adecuado, cumpliendo con los requisitos de la normativa vigente. Se identificaron oportunidades de optimización en la distribución de muros de corte que podrían mejorar aún más su desempeño sísmico y reducir costos de construcción. Este proyecto demostró la importancia de realizar análisis sísmicos detallados en edificaciones ubicadas en zonas de alta sismicidad.",
    software: ["ETABS", "SAP2000", "MATLAB", "AutoCAD"],
    standards: ["Norma E.030 Diseño Sismorresistente", "Norma E.060 Concreto Armado", "ASCE 7-16"],
    gallery: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478486982180-2de2fafa19f9?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    ],
    technicalData: [
      { parameter: "Altura total", value: "42 metros" },
      { parameter: "Número de pisos", value: "12" },
      { parameter: "Sistema estructural", value: "Dual (pórticos y muros de corte)" },
      { parameter: "Resistencia del concreto", value: "f'c = 280 kg/cm²" },
      { parameter: "Acero de refuerzo", value: "fy = 4200 kg/cm²" },
      { parameter: "Zona sísmica", value: "4 (alta sismicidad)" },
      { parameter: "Tipo de suelo", value: "S2 (suelo intermedio)" },
      { parameter: "Periodo fundamental", value: "1.2 segundos" },
      { parameter: "Cortante basal", value: "15% del peso sísmico" },
    ],
    pdfUrl: "/proyecto-analisis-sismico.pdf",
  },
  "puente-peatonal": {
    title: "Diseño de Puente Peatonal",
    description:
      "Diseño estructural completo de un puente peatonal con materiales compuestos, optimizando su resistencia y durabilidad en un entorno costero.",
    category: "Profesional",
    date: "Marzo 2023",
    client: "Municipalidad de Miraflores",
    location: "Lima, Perú",
    mainImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Puentes", "Materiales Compuestos", "Diseño Estructural"],
    overview:
      "Este proyecto profesional consistió en el diseño estructural completo de un puente peatonal de 45 metros de longitud utilizando materiales compuestos avanzados. El puente está ubicado en una zona costera, lo que requirió especial atención a la durabilidad y resistencia a la corrosión. El diseño buscó optimizar el uso de materiales mientras se garantizaba la seguridad y funcionalidad de la estructura.",
    objectives: [
      "Diseñar un puente peatonal seguro y estéticamente atractivo",
      "Utilizar materiales compuestos para maximizar la durabilidad en ambiente costero",
      "Optimizar el diseño para reducir costos de construcción y mantenimiento",
      "Cumplir con todas las normativas aplicables para puentes peatonales",
      "Minimizar el impacto ambiental durante la construcción y vida útil",
    ],
    methodology:
      "El diseño se desarrolló siguiendo un enfoque integral que consideró aspectos estructurales, funcionales, estéticos y de durabilidad. Se realizaron modelos estructurales detallados utilizando software especializado para analizar el comportamiento de la estructura bajo diferentes condiciones de carga. Se evaluaron múltiples configuraciones estructurales y materiales para identificar la solución óptima. Se realizaron análisis de vibraciones para garantizar el confort de los usuarios.",
    results:
      "El diseño final consiste en un puente de 45 metros de longitud con una superestructura de vigas de polímero reforzado con fibra de carbono (CFRP) y una losa de concreto de alto desempeño. Los apoyos consisten en pilares de concreto armado con protección especial contra la corrosión. El análisis estructural confirmó que el diseño cumple con todos los requisitos de resistencia, rigidez y durabilidad, con un factor de seguridad adecuado.",
    conclusions:
      "El uso de materiales compuestos permitió reducir el peso de la estructura en un 30% comparado con soluciones convencionales, lo que se tradujo en cimentaciones más económicas. La durabilidad estimada del puente es de 75 años con mínimo mantenimiento, lo que representa un ahorro significativo en el ciclo de vida de la estructura. El diseño final logra un equilibrio óptimo entre costo, durabilidad y estética.",
    software: ["SAP2000", "CSiBridge", "AutoCAD", "Revit", "Rhino 3D"],
    standards: [
      "AASHTO LRFD Guide Specifications for Design of Pedestrian Bridges",
      "Norma E.060 Concreto Armado",
      "ACI 440.1R-15",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1580835239846-5bb9ce29b179?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531218614045-e596f12f0393?q=80&w=1974&auto=format&fit=crop",
    ],
    technicalData: [
      { parameter: "Longitud total", value: "45 metros" },
      { parameter: "Ancho útil", value: "3.5 metros" },
      { parameter: "Material principal", value: "CFRP (Polímero reforzado con fibra de carbono)" },
      { parameter: "Carga viva de diseño", value: "5 kN/m²" },
      { parameter: "Velocidad de viento de diseño", value: "120 km/h" },
      { parameter: "Deflexión máxima", value: "L/500" },
      { parameter: "Frecuencia natural", value: "3.2 Hz" },
      { parameter: "Vida útil de diseño", value: "75 años" },
    ],
    pdfUrl: "/proyecto-puente-peatonal.pdf",
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const proyecto = proyectosDetallados[params.slug]

  if (!proyecto) {
    return {
      title: "Proyecto no encontrado",
      description: "El proyecto que buscas no existe",
    }
  }

  return {
    title: `${proyecto.title} | Portafolio de Ingeniería Estructural`,
    description: proyecto.description,
  }
}

export default function ProyectoDetailPage({ params }: { params: { slug: string } }) {
  const proyecto = proyectosDetallados[params.slug]

  if (!proyecto) {
    notFound()
  }

  // Función para descargar la presentación
  const handleDownloadPresentation = () => {
    // En una implementación real, esto descargaría un PDF generado dinámicamente
    // Por ahora, simplemente redirigimos a un PDF estático
    window.open(proyecto.pdfUrl, "_blank")
  }

  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/proyectos">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <Badge className="mb-2">{proyecto.category}</Badge>
          <h1 className="text-3xl font-bold">{proyecto.title}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src={proyecto.mainImage || "/placeholder.svg"} alt={proyecto.title} fill className="object-cover" />
          </div>

          <div className="mt-8">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="methodology">Metodología</TabsTrigger>
                <TabsTrigger value="results">Resultados</TabsTrigger>
                <TabsTrigger value="gallery">Galería</TabsTrigger>
                <TabsTrigger value="technical">Datos Técnicos</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Descripción General</h2>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">{proyecto.overview}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">Objetivos</h3>
                  <ul className="mt-2 space-y-2">
                    {proyecto.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold">Conclusiones</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">{proyecto.conclusions}</p>
                </div>
              </TabsContent>

              <TabsContent value="methodology" className="mt-4">
                <h2 className="text-2xl font-bold">Metodología</h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">{proyecto.methodology}</p>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code2 className="h-5 w-5" />
                        Software Utilizado
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {proyecto.software.map((sw, index) => (
                          <li key={index} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                            {sw}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Normativas Aplicadas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {proyecto.standards.map((std, index) => (
                          <li key={index} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                            {std}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="results" className="mt-4">
                <h2 className="text-2xl font-bold">Resultados</h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">{proyecto.results}</p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold">Documentos del Proyecto</h3>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Button variant="outline" className="justify-start gap-2">
                      <FileText className="h-4 w-4" />
                      Memoria de Cálculo
                      <Badge variant="outline" className="ml-auto">
                        PDF
                      </Badge>
                    </Button>
                    <Button variant="outline" className="justify-start gap-2">
                      <FileText className="h-4 w-4" />
                      Planos Estructurales
                      <Badge variant="outline" className="ml-auto">
                        DWG
                      </Badge>
                    </Button>
                    <Button variant="outline" className="justify-start gap-2">
                      <FileText className="h-4 w-4" />
                      Especificaciones Técnicas
                      <Badge variant="outline" className="ml-auto">
                        PDF
                      </Badge>
                    </Button>
                    <Button variant="outline" className="justify-start gap-2">
                      <FileText className="h-4 w-4" />
                      Informe Final
                      <Badge variant="outline" className="ml-auto">
                        PDF
                      </Badge>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-4">
                <h2 className="text-2xl font-bold">Galería del Proyecto</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {proyecto.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Imagen ${index + 1} del proyecto ${proyecto.title}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="technical" className="mt-4">
                <h2 className="text-2xl font-bold">Datos Técnicos</h2>
                <Table className="mt-4">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Parámetro</TableHead>
                      <TableHead>Valor</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {proyecto.technicalData.map((data, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{data.parameter}</TableCell>
                        <TableCell>{data.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Información del Proyecto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-zinc-500" />
                <div>
                  <p className="text-sm text-zinc-500">Fecha</p>
                  <p className="font-medium">{proyecto.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-zinc-500" />
                <div>
                  <p className="text-sm text-zinc-500">Cliente</p>
                  <p className="font-medium">{proyecto.client}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Ruler className="h-5 w-5 text-zinc-500" />
                <div>
                  <p className="text-sm text-zinc-500">Ubicación</p>
                  <p className="font-medium">{proyecto.location}</p>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-zinc-500">Etiquetas</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {proyecto.tags.map((tag, index) => {
                    // Asignar colores diferentes según el índice
                    const tagColors = [
                      "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800",
                      "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800",
                      "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-800",
                      "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-100 dark:hover:bg-amber-800",
                      "bg-rose-100 text-rose-800 hover:bg-rose-200 dark:bg-rose-900 dark:text-rose-100 dark:hover:bg-rose-800",
                    ]
                    const colorClass = tagColors[index % tagColors.length]

                    return (
                      <Link href={`/proyectos?tag=${tag}`} key={index}>
                        <Badge variant="outline" className={`cursor-pointer ${colorClass}`}>
                          {tag}
                        </Badge>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 space-y-4">
            <Button className="w-full gap-2" onClick={handleDownloadPresentation}>
              <Download className="h-4 w-4" />
              Descargar Presentación
            </Button>

            <Button variant="outline" className="w-full gap-2" asChild>
              <Link href="/contacto">Consultar sobre este proyecto</Link>
            </Button>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Proyectos Relacionados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.values(proyectosDetallados)
                .filter((p) => p.slug !== params.slug && p.category === proyecto.category)
                .slice(0, 2)
                .map((p, index) => (
                  <Link key={index} href={`/proyectos/${p.slug}`} className="block">
                    <div className="flex gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image src={p.mainImage || "/placeholder.svg"} alt={p.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-medium">{p.title}</h3>
                        <p className="text-sm text-zinc-500">{p.category}</p>
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

