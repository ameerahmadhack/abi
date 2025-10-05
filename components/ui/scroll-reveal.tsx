"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, once])

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return "translate-y-16"
      case "down":
        return "translate-y-[-4rem]"
      case "left":
        return "translate-x-16"
      case "right":
        return "translate-x-[-4rem]"
      default:
        return "translate-y-16"
    }
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700 ease-out overflow-hidden", className)}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : getDirectionClasses(),
      }}
    >
      {children}
    </div>
  )
}

