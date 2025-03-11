import type { Metadata } from "next"
import ExperienciaClientPage from "./ExperienciaClientPage"

export const metadata: Metadata = {
  title: "Experiencia | Portafolio de Ingeniería Estructural",
  description: "Experiencia profesional en diseño estructural y obra",
}

export default function ExperienciaPage() {
  return <ExperienciaClientPage />
}

