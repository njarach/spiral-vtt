// apps/web/src/App.jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Spiral VTT Portfolio</h1>
      <p>Mon projet d'apprentissage React + PocketBase</p>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Compteur: {count}
        </button>
      </div>
      
      <div>
        <h2>TODO:</h2>
        <ul>
          <li>Connecter à PocketBase ✅</li>
          <li>Créer mes composants 🚧</li>
          <li>Styliser avec CSS 📝</li>
        </ul>
      </div>
    </div>
  )
}

export default App