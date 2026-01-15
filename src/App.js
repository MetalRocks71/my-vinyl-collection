import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Tops from './components/Tops'
import Footer from './components/Footer'
import Collection from './components/Collection'
import Collectionrock from './components/Collectionrock'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tops />
      <Collection />
      <Collectionrock />
      <Footer />
    </>
  )
}

export default App
