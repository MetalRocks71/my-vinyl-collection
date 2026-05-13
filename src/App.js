import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Tops from './components/Tops'
import Footer from './components/Footer'
import Collection from './components/Collection'
import Collectionrock from './components/Collectionrock'
import Topsrocks from './components/Topsrock'
import AderitoPereira from './components/AderitoPereira'
import AlbumDetail from './components/AlbumDetail'
import AlbumDetailRock from './components/AlbumDetailRock'
import AlbumDetailAderito from './components/AlbumDetailAderito'

// Main page extracted into its own component so Router can wrap everything
const HomePage = ({ searchQuery, handleSearch }) => (
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

function App() {
	const [searchQuery, setSearchQuery] = useState('')

	const handleSearch = (query) => {
		setSearchQuery(query)
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage searchQuery={searchQuery} handleSearch={handleSearch} />} />
				<Route path='/album/:id' element={<AlbumDetail />} />
				<Route path='/albumRock/:id' element={<AlbumDetailRock />} />
				<Route path='/albumAderitoPereira/:id' element={<AlbumDetailAderito />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
