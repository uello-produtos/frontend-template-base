"use client"
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion"
import { ReactNode } from "react"

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {/* "user" respeita o prefers-reduced-motion do sistema */}
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}
