import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttom from './components/buttom/Button'
import Singlepost from './pages/blog/singlepost/singlepost'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Singlepost />
    </>
  )
}

export default App
