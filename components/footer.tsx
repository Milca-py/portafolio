import Link from "next/link"
import { Github, Linkedin, Mail, HardHat } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 transition-colors duration-300">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <HardHat className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold">AMILCAR MACHACCA MAYO</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Ingeniero Civil Estructural especializado en diseño y análisis de estructuras.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Enlaces</h3>
            <nav className="mt-2 flex flex-col space-y-2">
              <Link href="/proyectos" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                Proyectos
              </Link>
              <Link href="/blog" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                Blog
              </Link>
              <Link href="/software" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                Software
              </Link>
              <Link href="/experiencia" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                Experiencia
              </Link>
              <Link href="/contacto" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                Contacto
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contacto</h3>
            <div className="mt-2 space-y-2">
              <a
                href="mailto:200190@unsaac.edu.pe"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-primary dark:text-zinc-400"
              >
                <Mail className="h-4 w-4" />
                200190@unsaac.edu.pe
              </a>
              <a
                href="https://github.com/Milca-py"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-primary dark:text-zinc-400"
              >
                <Github className="h-4 w-4" />
                github.com/Milca-py
              </a>
              <a
                href="https://www.linkedin.com/in/amilcar-machacca-mayo-7635622a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-primary dark:text-zinc-400"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} AMILCAR MACHACCA MAYO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

