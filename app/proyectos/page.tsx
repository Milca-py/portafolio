import type { Metadata } from "next"
import ProyectosClientPage from "./ProyectosClientPage"

export const metadata: Metadata = {
  title: "Proyectos | Portafolio de Ingeniería Estructural",
  description: "Proyectos académicos y profesionales de ingeniería estructural",
}

export default function ProyectosPage() {
  return <ProyectosClientPage />
}

