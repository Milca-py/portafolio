"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, Code2, Github, ExternalLink, Calendar, FileCode, Server, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Datos de ejemplo para software detallado
const softwareDetallado = {
  structpy: {
    title: "StructPy",
    description:
      "Librería Python para análisis estructural básico y cálculo de elementos con interfaz intuitiva y documentación completa.",
    language: "Python",
    version: "2.3.0",
    lastUpdate: "Enero 2023",
    repo: "https://github.com/Milca-py/structpy",
    website: "https://structpy.readthedocs.io/",
    mainImage: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop",
    tags: ["Análisis Estructural", "Python", "Código Abierto"],
    overview:
      "StructPy es una librería de código abierto desarrollada en Python para el análisis estructural básico y el cálculo de elementos estructurales. Diseñada con un enfoque en la simplicidad y la facilidad de uso, proporciona herramientas para modelar y analizar estructuras 2D y 3D, calcular esfuerzos y deformaciones, y dimensionar elementos según diferentes normativas.",
    features: [
      "Análisis matricial de estructuras 2D y 3D",
      "Cálculo de esfuerzos, deformaciones y reacciones",
      "Dimensionamiento de elementos según normativas (ACI, Eurocódigo, etc.)",
      "Visualización gráfica de resultados",
      "Exportación de resultados en formatos estándar (CSV, JSON, Excel)",
      "Integración con otras librerías científicas de Python (NumPy, Matplotlib, Pandas)",
      "Documentación completa y ejemplos detallados",
    ],
    installation: `
# Instalación mediante pip
pip install structpy

# Instalación desde el repositorio
git clone https://github.com/Milca-py/structpy.git
cd structpy
pip install -e .
    `,
    usage: `
import structpy as sp

# Crear un modelo estructural
model = sp.Model2D()

# Añadir nodos
model.add_node(0, 0)  # Nodo 1 en (0,0)
model.add_node(4, 0)  # Nodo 2 en (4,0)
model.add_node(4, 3)  # Nodo 3 en (4,3)

# Añadir elementos
model.add_element(1, 2, 'beam', E=200e9, I=1e-4, A=0.01)  # Viga entre nodos 1 y 2
model.add_element(2, 3, 'beam', E=200e9, I=1e-4, A=0.01)  # Viga entre nodos 2 y 3

# Añadir apoyos
model.add_support(1, dx=True, dy=True, rz=True)  # Apoyo fijo en nodo 1
model.add_support(3, dx=True, dy=True)  # Apoyo deslizante en nodo 3

# Añadir cargas
model.add_node_load(2, Fy=-10000)  # Carga vertical de 10 kN en nodo 2

# Resolver el modelo
model.solve()

# Obtener resultados
displacements = model.get_displacements()
reactions = model.get_reactions()
internal_forces = model.get_internal_forces()

# Visualizar la estructura deformada
model.plot_deformed(scale=100)  # Escala x100 para visualizar mejor
    `,
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop",
    ],
    requirements: ["Python 3.7+", "NumPy", "SciPy", "Matplotlib", "Pandas"],
    contributors: [
      {
        name: "AMILCAR MACHACCA MAYO",
        role: "Desarrollador principal",
        github: "https://github.com/Milca-py",
      },
      {
        name: "Colaborador 1",
        role: "Documentación",
        github: "https://github.com/colaborador1",
      },
      {
        name: "Colaborador 2",
        role: "Testing",
        github: "https://github.com/colaborador2",
      },
    ],
    relatedProjects: [
      {
        title: "BeamCalc",
        slug: "beamcalc",
        description: "Aplicación web para cálculo de vigas",
      },
    ],
  },
  beamcalc: {
    title: "BeamCalc",
    description:
      "Aplicación web para cálculo y diseño de vigas con diferentes condiciones de carga, con visualización gráfica de resultados.",
    language: "JavaScript",
    version: "1.5.2",
    lastUpdate: "Marzo 2023",
    repo: "https://github.com/Milca-py/beamcalc",
    website: "https://beamcalc-demo.vercel.app/",
    mainImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
    tags: ["Cálculo Estructural", "JavaScript", "Web App"],
    overview:
      "BeamCalc es una aplicación web interactiva para el cálculo y diseño de vigas bajo diferentes condiciones de carga. Desarrollada con tecnologías web modernas, permite a ingenieros y estudiantes realizar análisis rápidos de vigas, visualizar diagramas de esfuerzos y deformaciones, y dimensionar secciones según diferentes normativas, todo desde el navegador sin necesidad de instalar software adicional.",
    features: [
      "Interfaz de usuario intuitiva y responsive",
      "Soporte para múltiples tipos de vigas (simplemente apoyadas, empotradas, voladizos, etc.)",
      "Definición flexible de cargas (puntuales, distribuidas, momentos)",
      "Cálculo automático de reacciones, esfuerzos cortantes, momentos flectores y deformaciones",
      "Visualización gráfica de diagramas de esfuerzos y deformada",
      "Dimensionamiento de secciones de acero y hormigón según normativas internacionales",
      "Exportación de resultados en PDF y DXF",
      "Guardado y carga de proyectos",
    ],
    installation: `
# Clonar el repositorio
git clone https://github.com/Milca-py/beamcalc.git
cd beamcalc

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
    `,
    usage: `
// Ejemplo de uso de la API de BeamCalc en JavaScript

import { Beam, Support, Load } from 'beamcalc';

// Crear una viga simplemente apoyada de 6m
const beam = new Beam({
  length: 6,
  elasticModulus: 210e9,  // Pa (acero)
  inertia: 2.05e-5,       // m⁴
  section: {
    type: 'IPE',
    size: 300
  }
});

// Añadir apoyos
beam.addSupport(new Support({ position: 0, type: 'pinned' }));
beam.addSupport(new Support({ position: 6, type: 'roller' }));

// Añadir cargas
beam.addLoad(new Load({ 
  type: 'point', 
  position: 3, 
  magnitude: -20000  // N (negativo hacia abajo)
}));
beam.addLoad(new Load({ 
  type: 'distributed', 
  startPosition: 0, 
  endPosition: 6, 
  magnitude: -5000   // N/m
}));

// Calcular
beam.solve();

// Obtener resultados
const reactions = beam.getReactions();
const shearForce = beam.getShearForce(3);  // kN en x=3m
const bendingMoment = beam.getBendingMoment(3);  // kN·m en x=3m
const deflection = beam.getDeflection(3);  // m en x=3m

// Verificar sección
const verification = beam.verifySection();
console.log('¿La sección es adecuada?', verification.isValid);
console.log('Ratio de utilización:', verification.utilizationRatio);
    `,
    screenshots: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22731c2eaf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092787765-e31bd9665b6b?q=80&w=2070&auto=format&fit=crop",
    ],
    requirements: ["Node.js 14+", "React 18+", "Next.js 13+", "Three.js", "Chart.js", "jsPDF"],
    contributors: [
      {
        name: "AMILCAR MACHACCA MAYO",
        role: "Desarrollador principal",
        github: "https://github.com/Milca-py",
      },
      {
        name: "Colaborador 3",
        role: "UI/UX",
        github: "https://github.com/colaborador3",
      },
      {
        name: "Colaborador 4",
        role: "Algoritmos",
        github: "https://github.com/colaborador4",
      },
    ],
    relatedProjects: [
      {
        title: "StructPy",
        slug: "structpy",
        description: "Librería Python para análisis estructural",
      },
    ],
  },
}

export default function SoftwareDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const software = softwareDetallado[params.slug as keyof typeof softwareDetallado]

  useEffect(() => {
    if (!software) {
      router.push("/software")
    }
  }, [software, router])

  if (!software) {
    return null
  }

  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/software">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <Badge className="mb-2 bg-accent text-white">{software.language}</Badge>
          <h1 className="text-3xl font-bold text-primary">{software.title}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src={software.mainImage || "/placeholder.svg"} alt={software.title} fill className="object-cover" />
          </div>

          <div className="mt-8">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Descripción</TabsTrigger>
                <TabsTrigger value="features">Características</TabsTrigger>
                <TabsTrigger value="code">Código</TabsTrigger>
                <TabsTrigger value="screenshots">Capturas</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Descripción General</h2>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">{software.overview}</p>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-4">
                <h2 className="text-2xl font-bold">Características</h2>
                <ul className="mt-4 space-y-2">
                  {software.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="code" className="mt-4">
                <h2 className="text-2xl font-bold">Código y Uso</h2>

                <div className="mt-6">
                  <h3 className="text-xl font-bold">Instalación</h3>
                  <div className="mt-2 rounded-md bg-zinc-950 p-4">
                    <pre className="text-sm text-zinc-100 whitespace-pre-wrap">
                      <code>{software.installation}</code>
                    </pre>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold">Ejemplo de Uso</h3>
                  <div className="mt-2 rounded-md bg-zinc-950 p-4">
                    <pre className="text-sm text-zinc-100 whitespace-pre-wrap">
                      <code>{software.usage}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="screenshots" className="mt-4">
                <h2 className="text-2xl font-bold">Capturas de Pantalla</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {software.screenshots.map((image, index) => (
                    <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Captura ${index + 1} de ${software.title}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <Card className="overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
            <div className="h-2 w-full bg-gradient-to-r from-primary to-accent"></div>
            <CardHeader>
              <CardTitle>Información del Proyecto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-zinc-500">Lenguaje</p>
                  <p className="font-medium">{software.language}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-zinc-500">Última actualización</p>
                  <p className="font-medium">{software.lastUpdate}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-zinc-500">Versión</p>
                  <p className="font-medium">{software.version}</p>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-zinc-500">Requisitos</p>
                <ul className="mt-2 space-y-1">
                  {software.requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 space-y-4">
            <Button className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
              <a href={software.repo} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Ver en GitHub
              </a>
            </Button>

            <Button variant="outline" className="w-full gap-2" asChild>
              <a href={software.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Sitio Web
              </a>
            </Button>
          </div>

          <Card className="mt-6 overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
            <div className="h-2 w-full bg-gradient-to-r from-accent to-secondary"></div>
            <CardHeader>
              <CardTitle>Colaboradores</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {software.contributors.map((contributor, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                      alt={contributor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{contributor.name}</p>
                    <p className="text-sm text-zinc-500">{contributor.role}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="mt-6 overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
            <div className="h-2 w-full bg-gradient-to-r from-secondary to-primary"></div>
            <CardHeader>
              <CardTitle>Proyectos Relacionados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {software.relatedProjects.map((project, index) => (
                <Link key={index} href={`/software/${project.slug}`} className="block">
                  <div className="flex gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <div className="rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">
                      {project.slug === "structpy" ? (
                        <Cpu className="h-4 w-4 text-primary" />
                      ) : (
                        <Server className="h-4 w-4 text-accent" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{project.title}</h3>
                      <p className="text-sm text-zinc-500">{project.description}</p>
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

