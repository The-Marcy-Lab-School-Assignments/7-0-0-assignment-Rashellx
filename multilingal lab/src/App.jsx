import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [language, setLanguage] = useState("Good Morning")


  return (
    <>
      <button>-</button>
      <button>+</button>
      <h1>{language}</h1>
      <button onClick={() => setLanguage("Good Morning")}>English</button>
      <button onClick={() => setLanguage("Ggvbhj")}>Chinese</button>
      <button>Spanish</button>
      <button>Haitian</button>
      <button>Portugues</button>
    </>
  )
}

export default App
