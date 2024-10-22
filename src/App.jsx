import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttom from './components/buttom/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Buttom />
      <div>home changes</div>
    </>
  )
}

export default App
