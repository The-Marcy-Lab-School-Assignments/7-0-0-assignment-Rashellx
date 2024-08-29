import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [language, setLanguage] = useState("Good Morning")
  const [fontSize, setFontSize] = useState(45)


  return (
    <>
      <button onClick={() => setFontSize(fontSize - 2)}>-</button>
      <button onClick={() => setFontSize(fontSize + 2)}>+</button >
      <h1 style={{ fontSize }}>{language}</h1>
      <button onClick={() => setLanguage("Good Morning")}>English</button>
      <button onClick={() => setLanguage("早上好")}>Chinese</button>
      <button onClick={() => setLanguage("¡Buenos días!")}>Spanish</button>
      <button onClick={() => setLanguage("Bon maten")}>Haitian</button>
      <button onClick={() => setLanguage("Bom dia")}>Portugues</button>
    </>
  )
}

export default App
