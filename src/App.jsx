import { useState } from 'react'
import Search from './components/Search'
import Modal from './components/Modal'
import Meals from './components/Meals'
import Favorites from './components/Favorites'
import './App.css'
import { useGlobalContext } from './context'



function App() {
  const { showModal, favorites } = useGlobalContext()
  
  return (
    <>
    <main>
    
    <Search />
    {favorites && <Favorites />}
    <Meals />
    {showModal && <Modal />}
    </main>
    </>
  )
}

export default App
