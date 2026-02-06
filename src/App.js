import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Tops from './components/Tops'
import Footer from './components/Footer'
import Collection from './components/Collection'
import Collectionrock from './components/Collectionrock'
import Topsrocks from './components/Topsrock'
import AderitoPereira from './components/AderitoPereira'



function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Hero />
      <About />
      <Tops />
      <Topsrocks />
      <Collection searchQuery={searchQuery} />
      <Collectionrock searchQuery={searchQuery} />
      <AderitoPereira searchQuery={searchQuery} />
      <Footer />
    </>
  )
}

export default App
