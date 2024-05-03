import { Dispatch, SetStateAction, useRef } from 'react'
import pause from '../assets/pause.png'
import paly from '../assets/play.png'
import videoGift from '../assets/videoGift.mp4'

type VideoPageProps = {
    isPlaying: boolean
    setIsPlaying: Dispatch<SetStateAction<boolean>>
}

const VideoPage = ({ isPlaying, setIsPlaying }: VideoPageProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play()
                setIsPlaying(true)
            } else {
                videoRef.current.pause()
                setIsPlaying(false)
            }
        }
    }

    const handleVideoEnded = () => {
        // Сбрасываем время воспроизведения и снова начинаем воспроизведение
        if (videoRef.current) {
            videoRef.current.currentTime = 0
            videoRef.current.play()
        }
    }

    return (
        <div className='bg-black h-screen w-full flex flex-col items-center justify-center pb-28 absolute top-0 z-0'>
            <video
                ref={videoRef}
                src={videoGift}
                onEnded={handleVideoEnded}
                loop
                autoPlay={false}
                className='w-[300px] object-cover'
                style={{ height: '300px' }}
            />
            <button onClick={togglePlay} className='flex justify-center m-4'>
                {isPlaying
                    ? <img src={pause} alt="Pause" className='w-[24px]' />
                    : <img src={paly} alt="Play" className='w-[24px]' />}
            </button>
        </div>
    )
}

export default VideoPage
