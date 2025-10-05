"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
  animate = true,
}: AnimatedGradientBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animate) return

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      container.style.setProperty("--x-pos", x.toString())
      container.style.setProperty("--y-pos", y.toString())
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [animate])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative p-[1px] rounded-xl overflow-hidden bg-background",
        "before:absolute before:inset-0 before:p-[1px] before:rounded-xl before:content-[''] before:bg-gradient-to-r before:from-primary/50 before:via-primary before:to-primary/50 before:animate-rotate-gradient",
        "after:absolute after:inset-0 after:p-[1px] after:rounded-xl after:content-[''] after:bg-gradient-to-r after:from-primary/50 after:via-primary after:to-primary/50 after:animate-rotate-gradient after:animation-delay-2000",
        containerClassName,
      )}
      style={
        {
          "--x-pos": "0.5",
          "--y-pos": "0.5",
        } as React.CSSProperties
      }
    >
      <div className={cn("relative z-10 bg-background rounded-xl", className)}>{children}</div>
    </div>
  )
}

