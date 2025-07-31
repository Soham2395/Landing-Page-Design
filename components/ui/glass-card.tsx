"use client"

import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`
      bg-white/5 
      backdrop-blur-xl 
      border 
      border-white/10 
      rounded-2xl 
      shadow-2xl
      hover:shadow-blue-500/10
      hover:shadow-2xl
      transition-all
      duration-300
      ${className}
    `}
    >
      {children}
    </div>
  )
}
