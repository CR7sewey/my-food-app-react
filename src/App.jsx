import { useState } from 'react'
import Search from './components/Search'
import Modal from './components/Modal'
import Meals from './components/Meals'
import Favorites from './components/Favorites'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
    
    <Search />
    {/*<Favorites />*/}
    <Meals />
    {/*<Modal />*/}
    </main>
    </>
  )
}

export default App
