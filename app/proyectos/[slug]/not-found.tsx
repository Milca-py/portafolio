import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Proyecto no encontrado</h1>
      <p className="mt-4 text-xl text-zinc-500 dark:text-zinc-400">
        El proyecto que estás buscando no existe o ha sido eliminado.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/proyectos">Ver todos los proyectos</Link>
      </Button>
    </div>
  )
}

