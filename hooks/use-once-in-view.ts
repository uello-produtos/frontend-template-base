"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"

export function useOnceInView(opts?: { amount?: number; margin?: string }) {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, {
    once: true,
    amount: opts?.amount ?? 0.2,
    margin: opts?.margin ?? "0px 0px -10% 0px",
  })
  return { ref, inView }
}
