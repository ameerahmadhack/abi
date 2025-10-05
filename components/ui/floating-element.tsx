"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  amplitude?: number
  period?: number
  phase?: number
}

export function FloatingElement({ children, className, amplitude = 10, period = 5, phase = 0 }: FloatingElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const startTime = useRef(Date.now() / 1000 + phase)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    let animationFrameId: number

    const animate = () => {
      const currentTime = Date.now() / 1000
      const elapsedTime = currentTime - startTime.current
      const yOffset = amplitude * Math.sin((2 * Math.PI * elapsedTime) / period)

      if (element) {
        element.style.transform = `translateY(${yOffset}px)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [amplitude, period])

  return (
    <div ref={elementRef} className={cn("transition-transform will-change-transform", className)}>
      {children}
    </div>
  )
}

