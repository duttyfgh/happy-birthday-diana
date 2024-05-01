import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react"
import cake from '../../assets/cake.svg'
import Candle from "./Candle"

const SecondPage = () => {
    const [isBlowing, setIsBlowing] = useState(false)
    const [isSmoke, setIsSmoke] = useState(false)
    const [isUnmount, setIsUnmount] = useState(false)

    const blow = () => {
        setIsBlowing(true)

        setTimeout(() => {
            setIsSmoke(true)
        }, 600)

        setTimeout(() => {
            setIsUnmount(true)
        }, 2000)
    }

    return (
        <AnimatePresence>
            {isUnmount || <motion.div
                exit={{ opacity: 0 }}
                className="bg-black absolute top-0 flex flex-col justify-center items-center h-screen w-full gap-10 z-20">
                <div className="flex flex-col">
                    <Candle isBlowing={isBlowing} isSmoke={isSmoke} />
                    <img src={cake} alt="Something went wrong.. Refresh the site" className="w-[200px] z-10" />
                </div>
                <button className={`firstPageButton text-[20px] py-2  ${isBlowing || 'animate-pulse'} px-8 mt-6`} onClick={blow}>
                    Blow away
                </button>
            </motion.div>}
        </AnimatePresence>
    )
}

export default SecondPage