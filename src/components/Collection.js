import { useState, useEffect, useRef } from 'react'
import Title from './Title'
import { metalcollection } from '../data'
import GlowAlbumCard from './GlowAlbumCard'
import { useLocation } from 'react-router-dom'

//search query with open collection sectioni
const Collection = ({ searchQuery }) => {
	const [open, setOpen] = useState(false)
	const sectionRef = useRef(null)
	const toggle = () => {
		setOpen(!open)
	}

	// scroll to section when searchQuery changes
	useEffect(() => {
		if (!searchQuery || !sectionRef.current) return

		// Calculate filtered collection inside useEffect
		const filtered = metalcollection.filter((item) => {
			const query = searchQuery.toLowerCase()
			return item.band.toLowerCase().includes(query)
		})

		if (filtered.length > 0) {
			const yOffset = -80
			const element = sectionRef.current
			const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

			window.scrollTo({ top: y, behavior: 'smooth' })
		}
	}, [searchQuery]) // Add dependency array here

	// Filter and sort collection based on search query
	const filteredCollection = metalcollection.filter((item) => {
		// Show all items if no search query OR query is less than 3 characters
		if (!searchQuery || searchQuery.length < 3) return true

		const query = searchQuery.toLowerCase()
		// Only search the FIRST 3 LETTERS of band name
		const bandPrefix = item.band.toLowerCase().slice(0, 3)
		return bandPrefix.includes(query)
	})

	// sort the collection by band and then title album
	const sortedCollection = [...filteredCollection].sort(
		(a, b) =>
			a.band.localeCompare(b.band, undefined, { sensitivity: 'base' }) ||
			a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }),
	)

	// Auto-open when there's a search query
	const shouldOpen = open || searchQuery

	  const location = useLocation()

		useEffect(() => {
			if (location && location.hash) {
				const el = document.querySelector(location.hash)
				if (el) el.scrollIntoView({ behavior: 'smooth' })
			}
		}, [location])

	return (
		<section className='section collection' id='metalcollection' ref={sectionRef}>
			<Title title='The ' subtitle='Metal Collection' />
			<div>
				<button className='category-btn' onClick={toggle}>
					Metal and Subgenres ({sortedCollection.length}){searchQuery && ` (${sortedCollection.length} results)`}
				</button>
				{shouldOpen && (
					<div className='section-center featured-center'>
						{sortedCollection.length > 0 ? (
							sortedCollection.map((item) => <GlowAlbumCard key={item.id} {...item} detailPath='album' />)
						) : (
							<div className='no-results'>
								<p>No results found for "{searchQuery}"</p>
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	)
}
export default Collection
