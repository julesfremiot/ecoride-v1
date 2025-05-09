import { useState } from 'react'
import './App.css'
import NavBar from "./components/Navbar/NavBar"
import Acceuil from "./components/Acceuil/Acceuil"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
    <header>
      <NavBar />
    </header>
    <main>
      <Acceuil />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
