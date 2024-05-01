import cls from './Candle.module.css'

type CandleProps = {
    isBlowing: boolean
    isSmoke: boolean
}

const Candle = ({ isBlowing, isSmoke }: CandleProps) => {
    return (
        <div className='flex flex-col items-center relative mb-[-10px]'>
            <div className='relative'>
                <div className={isBlowing ? cls.flameBlown : cls.flame} />

                {isSmoke && <div className={cls.smoke} />}
            </div>
            <div className='w-[2px] h-[6px] bg-slate-400' />
            <div className='w-[10px] h-[60px] bg-white rounded-t-lg border-r-4 border-r-slate-300' />
        </div>
    )
}

export default Candle