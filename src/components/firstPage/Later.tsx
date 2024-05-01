import { Variants, motion } from 'framer-motion'

type LaterProps = {
  isVisible: boolean
  letter: string
}

const variants: Variants = {
  hidden: {
    color: '#00000000'
  },
  visible: {
    color: '#ff2d8b',
    transition: { ease: 'easeInOut' }
  },
  disappear: {
    color: '#00000000' 
  }
}

const Later = ({ isVisible, letter }: LaterProps) => {
  return (
    <motion.span
      initial="hidden"
      animate={isVisible ? 'visible' : 'disappear'}
      variants={variants}
      className={`font-bold text-[60px] uppercase transition-all firstPageMainTextFont ${isVisible && 'firstPageMainTextShadow'}`}
    >
      {letter}
    </motion.span>
  )
}

export default Later
