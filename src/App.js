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
import AlbumDetail from './components/pages/AlbumDetail'
import AlbumDetailRock from './components/pages/AlbumDetailRock'
import AlbumDetailAderito from './components/pages/AlbumDetailAderito'
import ScrollToTop from './components/ScrollToTop'
import AlbumSongsList from './components/AlbumListSongs/AlbumSongs'

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
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<HomePage searchQuery={searchQuery} handleSearch={handleSearch} />} />
				<Route path='/album/:id' element={<AlbumDetail />} />
				<Route path='/albumRock/:id' element={<AlbumDetailRock />} />
				<Route path='/albumAderitoPereira/:id' element={<AlbumDetailAderito />} />
				<Route path='/albumSongs/:id' element={<AlbumSongsList />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
