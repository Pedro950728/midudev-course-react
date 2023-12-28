import './App.css'
import React, { useEffect, useState } from 'react'
import { MouseFollower } from './MouseFollower'

function App () {
  const [enabled, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleClick = () => {
    setEnable(!enabled)
  }

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <MouseFollower
        position={position}
        handleClick={handleClick}
        enabled={enabled}
      />
    </main>
  )
}

export default App
