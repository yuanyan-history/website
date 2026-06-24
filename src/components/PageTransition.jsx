import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

// Curtain overlay that sweeps down then up, revealing the new page
const curtainVariants = {
  initial: { scaleY: 0, originY: 0 },
  enter:   { scaleY: 1, originY: 0, transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] } },
  exit:    { scaleY: 0, originY: 1, transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1], delay: 0.1 } },
}

// Page content fades + slides up after curtain lifts
const pageVariants = {
  initial: { opacity: 0, y: 24 },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1], delay: 0.25 } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.25, ease: [0.76, 0, 0.24, 1] } },
}

export default function PageTransition({ children }) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} style={{ position: 'relative' }}>

        {/* Curtain overlay */}
        <motion.div
          variants={curtainVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(40,90,50,0.97)',
            zIndex: 200,
            pointerEvents: 'none',
          }}
        />

        {/* Page content */}
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.div>

      </motion.div>
    </AnimatePresence>
  )
}
