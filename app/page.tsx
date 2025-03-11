import Link from "next/link"
import { ArrowRight, Building2, Hammer, Mail, HardHat, BookOpen, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import BlogCard from "@/components/blog-card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-100 to-white py-20 dark:from-zinc-900 dark:to-zinc-800">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center bg-no-repeat opacity-30"></div>
          <div className="h-full w-full animated-gradient-bg opacity-20"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="inline-block rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">
              <HardHat className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-primary">AMILCAR MACHACCA MAYO</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Ingeniero Civil Estructural
              </p>
            </div>
            <p className="mx-auto max-w-[800px] text-balance text-zinc-600 md:text-xl dark:text-zinc-300">
              Especialista en diseño estructural, modelado y simulaciones FEM con experiencia en desarrollo de software
              para ingeniería.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
              >
                Análisis Estructural
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
              >
                Diseño Sísmico
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
              >
                Modelado FEM
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
              >
                Desarrollo de Software
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-100"
              >
                BIM
              </Badge>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/proyectos">
                  Ver Proyectos <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="/contacto">
                  Contacto <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-zinc-900 dark:to-transparent"></div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos Destacados</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Una selección de mis mejores trabajos en ingeniería estructural
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2">
            <ProjectCard
              title="Análisis Sísmico de Edificio Residencial"
              description="Modelado y análisis de un edificio de 12 pisos utilizando métodos de elementos finitos para evaluar su comportamiento ante diferentes escenarios sísmicos."
              image="/placeholder.svg?height=300&width=400"
              category="Académico"
              slug="analisis-sismico"
              tags={["Análisis Sísmico", "FEM", "Edificación"]}
            />
            <ProjectCard
              title="Diseño de Puente Peatonal"
              description="Diseño estructural completo de un puente peatonal con materiales compuestos, optimizando su resistencia y durabilidad en un entorno costero."
              image="/placeholder.svg?height=300&width=400"
              category="Profesional"
              slug="puente-peatonal"
              tags={["Puentes", "Materiales Compuestos", "Diseño Estructural"]}
            />
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="/proyectos">
                Ver todos los proyectos <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog e Investigaciones */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900/50"></div>
        <div className="absolute inset-0 opacity-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-secondary/10 p-2">
              <BookOpen className="h-6 w-6 text-secondary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog e Investigaciones</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Artículos y estudios sobre ingeniería estructural
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2">
            <BlogCard
              title="Avances en Análisis No Lineal de Estructuras"
              description="Exploración de métodos modernos para el análisis no lineal de estructuras complejas y su aplicación en proyectos de gran envergadura."
              date="15 Feb 2023"
              image="/placeholder.svg?height=200&width=400"
              slug="analisis-no-lineal"
            />
            <BlogCard
              title="Materiales Compuestos en Ingeniería Estructural"
              description="Aplicaciones y ventajas de los materiales compuestos en proyectos estructurales, con casos de estudio y análisis comparativo de rendimiento."
              date="3 Ene 2023"
              image="/placeholder.svg?height=200&width=400"
              slug="materiales-compuestos"
            />
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="/blog">
                Ver todos los artículos <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900/50"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-secondary/10 p-2">
              <Hammer className="h-6 w-6 text-secondary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experiencia</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Mi trayectoria profesional en diseño estructural y obra
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 py-8">
            <div className="card-hover-effect rounded-lg border bg-card p-6 shadow-sm dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ingeniero Estructural</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">Constructora XYZ • 2022 - Presente</p>
                </div>
              </div>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                Diseño estructural de edificios residenciales y comerciales. Supervisión de obra y control de calidad.
                Coordinación con equipos multidisciplinarios para la ejecución de proyectos.
              </p>
            </div>
            <div className="card-hover-effect rounded-lg border bg-card p-6 shadow-sm dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20">
                  <Hammer className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Asistente de Ingeniería</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">Consultora ABC • 2020 - 2022</p>
                </div>
              </div>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                Modelado estructural, análisis de elementos finitos y elaboración de planos estructurales. Participación
                en proyectos de refuerzo estructural y evaluación de estructuras existentes.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="/experiencia">
                Ver experiencia completa <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                ¿Interesado en colaborar? Contáctame para discutir tu proyecto
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-lg py-8">
            <div className="flex flex-col justify-center gap-4 pb-8 md:flex-row">
              <a
                href="mailto:200190@unsaac.edu.pe"
                className="card-hover-effect flex items-center gap-2 rounded-lg border bg-card p-4 text-zinc-600 hover:text-primary dark:text-zinc-300"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>200190@unsaac.edu.pe</span>
              </a>
              <a
                href="https://github.com/Milca-py"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover-effect flex items-center gap-2 rounded-lg border bg-card p-4 text-zinc-600 hover:text-primary dark:text-zinc-300"
              >
                <Github className="h-5 w-5 text-primary" />
                <span>github.com/Milca-py</span>
              </a>
              <a
                href="https://www.linkedin.com/in/amilcar-machacca-mayo-7635622a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover-effect flex items-center gap-2 rounded-lg border bg-card p-4 text-zinc-600 hover:text-primary dark:text-zinc-300"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <span>LinkedIn</span>
              </a>
            </div>
            <Button size="lg" className="w-full gap-2" asChild>
              <Link href="/contacto">
                Formulario de Contacto <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

