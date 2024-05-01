import { useState } from 'react'
import FirstPage from './components/firstPage/FirstPage'
import SecondPage from './components/SecondPage/SecondPage'
import VideoPage from './components/VideoPage'

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className='h-screen'>
      <FirstPage />
      <SecondPage />
      <VideoPage isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  )
}

export default App