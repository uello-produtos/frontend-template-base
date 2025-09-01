import { m } from "framer-motion"

export const Motion = m // atalho: <Motion.div />

export const EASING = {
  standard: [0.2, 0, 0, 1] as const,
  emphasize: [0.2, 0, 0, 1] as const,
}

export const TRANSITION = {
  fast:   { duration: 0.15, ease: EASING.standard },
  base:   { duration: 0.25, ease: EASING.standard },
  slow:   { duration: 0.4,  ease: EASING.standard },
  spring: { type: "spring", stiffness: 260, damping: 24, mass: 0.9 } as const,
}

export const VARIANTS = {
  fadeIn: { hidden: { opacity: 0 }, show: { opacity: 1, transition: TRANSITION.base } },
  slideUp: {
    hidden: { opacity: 0, y: 12 },
    show:   { opacity: 1, y: 0, transition: TRANSITION.base },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    show:   { opacity: 1, scale: 1, transition: TRANSITION.base },
  },
}

export const staggerChildren = (stagger = 0.06) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
})
