import { useState, useEffect } from 'react'
import Later from './Later'
import { AnimatePresence, motion, Variants } from 'framer-motion'

const disappearing: Variants = {
  hidden: {
    opacity: 1
  },
  exit: {
    opacity: 0,
  }
}

const FirstPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGoToNextPage, setIsGoToNextPage] = useState(false)//TODO: set false here

  const happyArr = [
    { letter: 'h', id: 0 },
    { letter: 'a', id: 1 },
    { letter: 'p', id: 2 },
    { letter: 'p', id: 3 },
    { letter: 'y', id: 4 }
  ]

  const birthdayArr = [
    { letter: 'b', id: 5 },
    { letter: 'i', id: 6 },
    { letter: 'r', id: 7 },
    { letter: 't', id: 8 },
    { letter: 'h', id: 9 },
    { letter: 'd', id: 10 },
    { letter: 'a', id: 11 },
    { letter: 'y', id: 12 }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, 200)


    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (currentIndex === 13) {
      setCurrentIndex(0)
    }
  }, [currentIndex])

  const goToNextPageHandler = () => {
    setIsGoToNextPage(true)
  }

  return (//TODO: Make the second page with a cake and candles witch Diana'll be able to blow away
    <AnimatePresence>
      {isGoToNextPage || <motion.div
        variants={disappearing}
        initial='hidden'
        exit='exit'
        className='flex flex-col justify-top gap-20 h-screen w-full items-center absolute z-50 bg-black'>

        <div className='flex flex-col items-center w-full py-20'>
          <div>
            {happyArr.map((item) => (
              <Later
                key={item.id}
                isVisible={item.id === currentIndex}
                letter={item.letter}
              />
            ))}
          </div>
          <div>
            {birthdayArr.map((item) => (
              <Later
                key={item.id}
                isVisible={item.id === currentIndex}
                letter={item.letter}
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-20'>
          <span className='z-10 text-[20px] text-slate-300'>Happy birthday Diana!</span>
          <button
            className='firstPageButton text-[20px] py-2 animate-pulse'
            onClick={goToNextPageHandler}>Click me</button>
        </div>
      </motion.div>}
    </AnimatePresence>
  )
}

export default FirstPage
