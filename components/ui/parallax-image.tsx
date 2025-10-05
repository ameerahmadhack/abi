"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface ParallaxImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  speed?: number
}

export function ParallaxImage({ src, alt, width, height, className = "", speed = 0.3 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const { top } = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementVisible = top < windowHeight && top > -height

      if (elementVisible) {
        const scrollPosition = window.scrollY
        const elementPosition = ref.current.offsetTop
        const distance = scrollPosition - elementPosition
        const parallaxOffset = distance * speed

        setOffset(parallaxOffset)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [height, speed])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}

