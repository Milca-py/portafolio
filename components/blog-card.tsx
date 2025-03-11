"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"
import { motion } from "framer-motion"

interface BlogCardProps {
  title: string
  description: string
  date: string
  image: string
  slug: string
}

export default function BlogCard({ title, description, date, image, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
        <Card className="overflow-hidden transition-all hover:shadow-lg dark:border-zinc-800">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
          </div>
          <CardHeader className="p-4">
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <CalendarIcon className="h-4 w-4 text-primary" />
              <span>{date}</span>
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-zinc-500 dark:text-zinc-400 line-clamp-3">{description}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <span className="text-sm font-medium text-primary">Leer más</span>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  )
}

