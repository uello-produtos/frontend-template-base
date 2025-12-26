"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"

export function useOnceInView(opts?: { amount?: number; margin?: string }) {
  const ref = useRef<HTMLElement | null>(null)
  const defaultMargin = "0px 0px -10% 0px"
  const inView = useInView(ref, {
    once: true,
    amount: opts?.amount ?? 0.2,
    ...(opts?.margin ? { margin: opts.margin as any } : { margin: defaultMargin as any }),
  })
  return { ref, inView }
}
