"use client"

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag, Clock, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

// Datos de ejemplo para artículos del blog detallados
const articulosDetallados = {
  "analisis-no-lineal": {
    title: "Avances en Análisis No Lineal de Estructuras",
    description:
      "Exploración de métodos modernos para el análisis no lineal de estructuras complejas y su aplicación en proyectos de gran envergadura.",
    date: "15 Feb 2023",
    author: "AMILCAR MACHACCA MAYO",
    readTime: "12 minutos",
    mainImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    tags: ["Análisis Estructural", "Métodos No Lineales", "Ingeniería Sísmica"],
    content: `
      <h2>Introducción al Análisis No Lineal</h2>
      <p>El análisis no lineal de estructuras representa uno de los avances más significativos en la ingeniería estructural moderna. A diferencia del análisis lineal convencional, que asume una relación directamente proporcional entre cargas y desplazamientos, el análisis no lineal considera comportamientos más complejos y realistas de los materiales y las estructuras bajo diferentes condiciones de carga.</p>
      
      <p>En este artículo, exploraremos los últimos avances en métodos de análisis no lineal, sus aplicaciones prácticas y cómo están transformando el diseño estructural en proyectos de gran envergadura.</p>
      
      <h2>Fundamentos del Análisis No Lineal</h2>
      <p>El comportamiento no lineal en estructuras puede originarse por diversas causas:</p>
      
      <ul>
        <li><strong>No linealidad del material:</strong> Cuando la relación tensión-deformación del material no sigue una ley lineal, como ocurre con el hormigón después de la fisuración o el acero después de la fluencia.</li>
        <li><strong>No linealidad geométrica:</strong> Cuando los desplazamientos son lo suficientemente grandes como para que la geometría deformada difiera significativamente de la geometría inicial.</li>
        <li><strong>No linealidad de las condiciones de contorno:</strong> Cuando las condiciones de apoyo o las interacciones entre elementos cambian durante la aplicación de la carga.</li>
      </ul>
      
      <h2>Métodos Avanzados de Análisis No Lineal</h2>
      <p>Los recientes avances en capacidad computacional han permitido el desarrollo y aplicación de métodos más sofisticados para el análisis no lineal:</p>
      
      <h3>1. Análisis Pushover Adaptativo</h3>
      <p>El análisis pushover tradicional ha evolucionado hacia versiones adaptativas que pueden actualizar la distribución de cargas laterales en función de las propiedades dinámicas de la estructura durante el proceso de deformación. Esto proporciona una representación más precisa del comportamiento estructural bajo cargas sísmicas, especialmente en estructuras irregulares o con modos de vibración superiores significativos.</p>

      <h3>2. Análisis Dinámico No Lineal en el Dominio del Tiempo</h3>
      <p>Este método, también conocido como análisis tiempo-historia no lineal, permite simular la respuesta estructural a lo largo del tiempo cuando se somete a acelerogramas sísmicos reales o sintéticos. Los avances recientes incluyen la implementación de modelos constitutivos más precisos y algoritmos de integración numérica más eficientes.</p>

      <h3>3. Modelos de Plasticidad Distribuida</h3>
      <p>A diferencia de los modelos de plasticidad concentrada (rótulas plásticas), los modelos de plasticidad distribuida permiten que la no linealidad se desarrolle a lo largo de todo el elemento estructural. Esto resulta en una representación más realista del comportamiento post-elástico, especialmente en elementos de hormigón armado.</p>

      <h2>Aplicaciones Prácticas</h2>
      <p>El análisis no lineal está encontrando aplicaciones cada vez más amplias en la práctica profesional:</p>

      <h3>Diseño Basado en Desempeño</h3>
      <p>El diseño sísmico basado en desempeño utiliza extensivamente el análisis no lineal para predecir el comportamiento de la estructura bajo diferentes niveles de intensidad sísmica y verificar que cumpla con los objetivos de desempeño establecidos.</p>

      <h3>Evaluación de Estructuras Existentes</h3>
      <p>Para estructuras existentes, especialmente aquellas construidas antes de los códigos sísmicos modernos, el análisis no lineal permite una evaluación más precisa de su capacidad real y la identificación de vulnerabilidades específicas.</p>

      <h3>Diseño de Estructuras Especiales</h3>
      <p>Edificios de gran altura, puentes de gran luz, instalaciones nucleares y otras estructuras críticas se benefician enormemente del análisis no lineal para garantizar su seguridad bajo condiciones extremas.</p>

      <h2>Desafíos y Limitaciones</h2>
      <p>A pesar de sus ventajas, el análisis no lineal presenta desafíos importantes:</p>

      <ul>
        <li>Requiere un conocimiento profundo de los principios teóricos y las limitaciones de los modelos utilizados.</li>
        <li>La calibración de los parámetros del modelo puede ser compleja y requiere datos experimentales.</li>
        <li>El tiempo de cálculo puede ser significativamente mayor que en el análisis lineal.</li>
        <li>La interpretación de resultados exige experiencia y juicio ingenieril.</li>
      </ul>

      <h2>Conclusiones y Perspectivas Futuras</h2>
      <p>El análisis no lineal de estructuras ha pasado de ser una herramienta académica a convertirse en un componente esencial de la práctica profesional en ingeniería estructural. Los avances en capacidad computacional, algoritmos numéricos y modelos constitutivos están ampliando constantemente sus posibilidades y aplicaciones.</p>

      <p>En el futuro, podemos esperar una integración más estrecha con tecnologías emergentes como la inteligencia artificial para la optimización de diseños, el aprendizaje automático para la calibración de modelos, y la realidad virtual para la visualización e interpretación de resultados.</p>

      <p>El dominio de estas técnicas avanzadas será cada vez más importante para los ingenieros estructurales que busquen diseñar estructuras más seguras, eficientes y resilientes frente a eventos extremos.</p>
    `,
    relatedArticles: [
      {
        title: "Materiales Compuestos en Ingeniería Estructural",
        slug: "materiales-compuestos",
        image: "https://images.unsplash.com/photo-1581092921461-39b9d904ee84?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  "materiales-compuestos": {
    title: "Materiales Compuestos en Ingeniería Estructural",
    description:
      "Aplicaciones y ventajas de los materiales compuestos en proyectos estructurales, con casos de estudio y análisis comparativo de rendimiento.",
    date: "3 Ene 2023",
    author: "AMILCAR MACHACCA MAYO",
    readTime: "10 minutos",
    mainImage: "https://images.unsplash.com/photo-1581092921461-39b9d904ee84?q=80&w=2070&auto=format&fit=crop",
    tags: ["Materiales Compuestos", "Innovación Estructural", "Sostenibilidad"],
    content: `
      <h2>Introducción a los Materiales Compuestos</h2>
      <p>Los materiales compuestos representan una de las innovaciones más significativas en el campo de la ingeniería estructural en las últimas décadas. Estos materiales, formados por la combinación de dos o más componentes con propiedades físicas o químicas distintas, ofrecen características superiores a las de sus constituyentes individuales.</p>
      
      <p>En este artículo, exploraremos las aplicaciones actuales de los materiales compuestos en la ingeniería estructural, sus ventajas frente a materiales tradicionales, y analizaremos casos de estudio que demuestran su efectividad en proyectos reales.</p>
      
      <h2>Tipos de Materiales Compuestos en Ingeniería Estructural</h2>
      
      <h3>1. Polímeros Reforzados con Fibras (FRP)</h3>
      <p>Los FRP, que incluyen fibras de carbono (CFRP), vidrio (GFRP) o aramida (AFRP) embebidas en una matriz polimérica, son quizás los materiales compuestos más utilizados en aplicaciones estructurales. Sus principales ventajas incluyen:</p>
      
      <ul>
        <li>Alta resistencia específica (relación resistencia/peso)</li>
        <li>Excelente resistencia a la corrosión</li>
        <li>Facilidad de moldeo en formas complejas</li>
        <li>Baja conductividad térmica</li>
      </ul>
      
      <h3>2. Hormigón Reforzado con Fibras</h3>
      <p>La adición de fibras (metálicas, sintéticas o naturales) al hormigón mejora significativamente su ductilidad, resistencia a la tracción y control de fisuración. Este tipo de material compuesto está ganando popularidad en aplicaciones como pavimentos, elementos prefabricados y estructuras sometidas a cargas dinámicas.</p>
      
      <h3>3. Madera Laminada y Productos Derivados</h3>
      <p>La madera laminada encolada (glulam) y los productos de madera de ingeniería como el CLT (Cross Laminated Timber) representan otra categoría importante de materiales compuestos, que combinan la sostenibilidad de la madera con propiedades mecánicas mejoradas y mayor estabilidad dimensional.</p>
      
      <h2>Aplicaciones en Ingeniería Estructural</h2>
      
      <h3>Refuerzo de Estructuras Existentes</h3>
      <p>Una de las aplicaciones más extendidas de los FRP es el refuerzo de estructuras existentes. Las láminas o tejidos de CFRP se adhieren externamente a elementos de hormigón o acero para aumentar su capacidad portante o mejorar su comportamiento sísmico. Esta técnica ofrece ventajas significativas frente a métodos tradicionales como el recrecido con hormigón:</p>
      
      <ul>
        <li>Mínimo incremento de peso y dimensiones</li>
        <li>Rapidez de ejecución</li>
        <li>Mínima interrupción del uso de la estructura</li>
        <li>Durabilidad superior en ambientes agresivos</li>
      </ul>
      
      <h3>Nuevas Construcciones</h3>
      <p>En nuevas construcciones, los materiales compuestos están encontrando aplicaciones cada vez más diversas:</p>
      
      <ul>
        <li>Perfiles pultruidos de GFRP para estructuras en ambientes corrosivos</li>
        <li>Armaduras no metálicas (GFRP, CFRP) para hormigón en ambientes marinos o con requisitos de no conductividad electromagnética</li>
        <li>Cables y tendones de CFRP para puentes atirantados y estructuras pretensadas</li>
        <li>Edificios de media y gran altura con estructura principal de madera laminada o CLT</li>
      </ul>
      
      <h2>Casos de Estudio</h2>
      
      <h3>Puente Peatonal de Materiales Compuestos</h3>
      <p>Un ejemplo notable es el puente peatonal de 40 metros de luz construido enteramente con perfiles pultruidos de GFRP en una zona costera con alta corrosión. Después de 15 años de servicio, la estructura mantiene sus propiedades originales sin signos de deterioro, mientras que los puentes metálicos cercanos han requerido múltiples intervenciones de mantenimiento.</p>
      
      <h3>Refuerzo Sísmico de Hospital</h3>
      <p>El refuerzo sísmico de un hospital de 5 plantas mediante tejidos de CFRP aplicados en configuración de "X" en los pórticos principales permitió aumentar su capacidad de disipación de energía en un 65% con un incremento de peso inferior al 2%. La intervención se completó en 3 meses sin interrumpir el funcionamiento del hospital.</p>
      
      <h3>Edificio Residencial en CLT</h3>
      <p>Un edificio residencial de 8 plantas construido con paneles de CLT demostró una reducción del 35% en la huella de carbono comparado con una solución equivalente en hormigón armado. Además, el tiempo de construcción se redujo en un 40% gracias a la prefabricación de los elementos estructurales.</p>
      
      <h2>Análisis Comparativo de Rendimiento</h2>
      <p>Al comparar los materiales compuestos con soluciones tradicionales, es importante considerar múltiples factores:</p>
      
      <h3>Coste del Ciclo de Vida</h3>
      <p>Aunque el coste inicial de los materiales compuestos suele ser mayor, el análisis del ciclo de vida completo frecuentemente demuestra ventajas económicas debido a:</p>
      
      <ul>
        <li>Menores costes de mantenimiento</li>
        <li>Mayor durabilidad</li>
        <li>Reducción de tiempos de construcción</li>
        <li>Menor impacto en operaciones durante la instalación</li>
      </ul>
      
      <h3>Sostenibilidad</h3>
      <p>El impacto ambiental varía significativamente según el tipo de material compuesto:</p>
      
      <ul>
        <li>Los productos de madera de ingeniería ofrecen excelentes credenciales de sostenibilidad, actuando como almacenes de carbono</li>
        <li>Los FRP basados en resinas termoestables presentan desafíos de reciclabilidad, aunque su larga vida útil compensa parcialmente este inconveniente</li>
        <li>Están emergiendo nuevas generaciones de compuestos con matrices termoplásticas o de origen biológico que mejoran significativamente la sostenibilidad</li>
      </ul>
      
      <h2>Desafíos y Limitaciones</h2>
      <p>A pesar de sus ventajas, la adopción generalizada de materiales compuestos enfrenta varios obstáculos:</p>
      
      <ul>
        <li>Falta de normativa específica y completa en muchos países</li>
        <li>Conocimiento limitado entre profesionales sobre diseño con estos materiales</li>
        <li>Comportamiento a largo plazo aún no completamente caracterizado para algunas aplicaciones</li>
        <li>Resistencia al fuego que requiere medidas de protección adicionales en muchos casos</li>
      </ul>
      
      <h2>Conclusiones y Perspectivas Futuras</h2>
      <p>Los materiales compuestos están transformando gradualmente la práctica de la ingeniería estructural, ofreciendo soluciones innovadoras a desafíos tradicionales. Su adopción continuará acelerándose a medida que:</p>
      
      <ul>
        <li>Se desarrollen normativas más completas</li>
        <li>Aumente la formación de profesionales en estas tecnologías</li>
        <li>Mejoren los procesos de fabricación, reduciendo costes</li>
        <li>Crezca la demanda de soluciones más sostenibles y durables</li>
      </ul>
      
      <p>El futuro apunta hacia materiales compuestos "inteligentes" con capacidades de monitorización integrada, compuestos híbridos que combinen diferentes tipos de fibras para optimizar prestaciones, y avances significativos en sostenibilidad mediante el uso de fibras naturales y resinas de origen biológico.</p>
    `,
    relatedArticles: [
      {
        title: "Avances en Análisis No Lineal de Estructuras",
        slug: "analisis-no-lineal",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const articulo = articulosDetallados[params.slug]

  if (!articulo) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que buscas no existe",
    }
  }

  return {
    title: `${articulo.title} | Blog de Ingeniería Estructural`,
    description: articulo.description,
  }
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const articulo = articulosDetallados[params.slug]
  const { toast } = useToast()

  if (!articulo) {
    notFound()
  }

  // Función para convertir el contenido HTML en JSX
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent }
  }

  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-primary">{articulo.title}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
            <Image src={articulo.mainImage || "/placeholder.svg"} alt={articulo.title} fill className="object-cover" />
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{articulo.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4 text-primary" />
              <span>{articulo.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-primary" />
              <span>{articulo.readTime} de lectura</span>
            </div>
          </div>

          <div className="prose prose-zinc max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={createMarkup(articulo.content)} />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {articulo.tags.map((tag, index) => {
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
                <Link href={`/blog?tag=${tag}`} key={index}>
                  <Badge variant="outline" className={`cursor-pointer ${colorClass}`}>
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                </Link>
              )
            })}
          </div>

          <div className="mt-8 flex justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <Button
              variant="outline"
              size="sm"
              className="gap-1"
              onClick={() => {
                const likeCount = Number.parseInt(localStorage.getItem(`like_${params.slug}`) || "0")
                localStorage.setItem(`like_${params.slug}`, (likeCount + 1).toString())
                toast({
                  title: "¡Gracias por tu like!",
                  description: `Este artículo tiene ${likeCount + 1} likes`,
                })
              }}
            >
              <ThumbsUp className="h-4 w-4" />
              Me gusta
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1"
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: articulo.title,
                      text: articulo.description,
                      url: window.location.href,
                    })
                    .catch((err) => console.error("Error al compartir:", err))
                } else {
                  // Fallback para navegadores que no soportan Web Share API
                  navigator.clipboard.writeText(window.location.href)
                  toast({
                    title: "Enlace copiado",
                    description: "El enlace ha sido copiado al portapapeles",
                  })
                }
              }}
            >
              <Share2 className="h-4 w-4" />
              Compartir
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1"
              onClick={() => {
                const isSaved = localStorage.getItem(`saved_${params.slug}`) === "true"
                localStorage.setItem(`saved_${params.slug}`, (!isSaved).toString())
                toast({
                  title: isSaved ? "Artículo eliminado de guardados" : "Artículo guardado",
                  description: isSaved
                    ? "Has eliminado este artículo de tus guardados"
                    : "Has guardado este artículo para leer más tarde",
                })
              }}
            >
              <Bookmark className="h-4 w-4" />
              Guardar
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
            <div className="h-2 w-full bg-gradient-to-r from-primary to-accent"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Sobre el autor</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                    alt={articulo.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{articulo.author}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Ingeniero Civil Estructural</p>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Especialista en diseño estructural, modelado y simulaciones FEM con experiencia en desarrollo de
                software para ingeniería.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
            <div className="h-2 w-full bg-gradient-to-r from-accent to-secondary"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Artículos relacionados</h3>
              <div className="space-y-4">
                {articulo.relatedArticles.map((related, index) => (
                  <Link key={index} href={`/blog/${related.slug}`} className="block">
                    <div className="flex gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium line-clamp-2">{related.title}</h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-primary/10 dark:border-primary/20 highlight-card">
            <div className="h-2 w-full bg-gradient-to-r from-secondary to-primary"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Etiquetas</h3>
              <div className="flex flex-wrap gap-2">
                {articulo.tags.map((tag, index) => {
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
                    <Link href={`/blog?tag=${tag}`} key={index}>
                      <Badge variant="outline" className={`cursor-pointer ${colorClass}`}>
                        {tag}
                      </Badge>
                    </Link>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

