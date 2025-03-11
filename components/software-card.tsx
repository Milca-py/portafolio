"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface SoftwareCardProps {
  title: string
  description: string
  language: string
  repo: string
  slug: string
}

export default function SoftwareCard({ title, description, language, repo, slug }: SoftwareCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col dark:border-zinc-800">
        <CardHeader className="p-4 pb-0">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{title}</h3>
            <Badge variant="outline" className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800">
              <Code2 className="h-3 w-3 text-primary" />
              {language}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-3 flex-grow">
          <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between p-4 border-t dark:border-zinc-800">
          <Link
            href={`/software/${slug}`}
            className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
          >
            Ver detalles
            <ExternalLink className="h-3 w-3" />
          </Link>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <Github className="h-4 w-4" />
            Repositorio
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

