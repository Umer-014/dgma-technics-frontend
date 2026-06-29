import { motion } from "framer-motion";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -25,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1], // smoother easing
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;