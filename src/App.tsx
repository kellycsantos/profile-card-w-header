import { useState } from 'react'

import './App.scss'
import Card from './components/Card'
import avatarUser from './assets/image-victor.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Card avatar={avatarUser} name='Vitor Crest' age='26' city='London' followers='80' likes='803' photos='1.4' />
      </main>
    </>
  )
}

export default App
