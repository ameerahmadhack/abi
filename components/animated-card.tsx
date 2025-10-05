"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export default function AnimatedCard({
  children,
  className,
  glowColor = "rgba(138, 43, 226, 0.4)",
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()

    const x = (clientX - left) / width
    const y = (clientY - top) / height

    setMousePosition({ x, y })
  }

  return (
    <motion.div
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300",
        isHovered ? "shadow-xl scale-[1.02]" : "shadow-md",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${glowColor} 0%, transparent 50%)`,
            opacity: 0.6,
          }}
        />
      )}
      {children}
    </motion.div>
  )
}

