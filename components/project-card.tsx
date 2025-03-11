"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  slug: string
  tags?: string[]
}

export default function ProjectCard({ title, description, image, category, slug, tags }: ProjectCardProps) {
  return (
    <Link href={`/proyectos/${slug}`}>
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
        <Card className="overflow-hidden transition-all hover:shadow-lg dark:border-zinc-800">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <Badge className="absolute right-2 top-2 bg-primary/90 hover:bg-primary">{category}</Badge>
          </div>
          <CardHeader className="p-4">
            <h3 className="text-xl font-bold">{title}</h3>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-zinc-500 dark:text-zinc-400 line-clamp-3">{description}</p>
          </CardContent>
          {tags && tags.length > 0 && (
            <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
              {tags.map((tag, index) => {
                // Asignar colores diferentes según el índice
                const tagColors = [
                  "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
                  "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
                  "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
                  "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
                  "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-100",
                  "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100",
                ]
                const colorClass = tagColors[index % tagColors.length]

                return (
                  <Badge key={index} variant="outline" className={`text-xs hover:bg-opacity-80 ${colorClass}`}>
                    {tag}
                  </Badge>
                )
              })}
            </CardFooter>
          )}
        </Card>
      </motion.div>
    </Link>
  )
}

