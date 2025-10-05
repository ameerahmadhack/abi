"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FloatingElement } from "@/components/ui/floating-element"
import { motion, useScroll, useTransform } from "framer-motion"

export default function AnimatedHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as percentage of screen
      const x = (clientX / innerWidth - 0.5) * 2 // -1 to 1
      const y = (clientY / innerHeight - 0.5) * 2 // -1 to 1

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={ref} className="relative w-full h-[90vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10"
        style={{ opacity }}
      />

      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Abis Fulani"
          fill
          className="object-cover"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px) scale(1.1)`,
            transition: "transform 0.2s ease-out",
          }}
          priority
        />
      </motion.div>

      <motion.div
        className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ opacity }}
      >
        <div className="max-w-2xl space-y-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white animated-gradient-text bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Abis Fulani
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Digital Content Creator, Influencer & Philanthropist
          </motion.p>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <FloatingElement amplitude={5} period={4}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </FloatingElement>

            <FloatingElement amplitude={5} period={4} phase={2}>
              <Button
                variant="outline"
                size="lg"
                className="glass-effect border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </FloatingElement>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated particles/shapes in background */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-white rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </div>
  )
}

