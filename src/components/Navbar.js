// ─── External data & React hooks ───────────────────────────────────────────
// pageLinks: array of { id, href, text } objects that populate the nav menu
// useState: manages local UI state (menu open, navbar visibility, search input)
// useEffect: runs the scroll listener after render
// useRef: holds a direct reference to the search input DOM node
import { pageLinks } from '../data'
import { useState, useEffect, useRef } from 'react'

const Navbar = ({ onSearch }) => {
	// ─── State ───────────────────────────────────────────────────────────────
	const [showLinks, setShowLinks] = useState(false) // burger menu open/closed
	const [showNavbar, setShowNavbar] = useState(true) // navbar visible/hidden on scroll
	const [lastScrollY, setLastScrollY] = useState(0) // previous scroll position, used to detect scroll direction
	const [searchQuery, setSearchQuery] = useState('') // current value of the search input
	const inputRef = useRef(null) // ref to the search <input>, used to refocus after clearing

	// ─── Scroll listener ─────────────────────────────────────────────────────
	// Hides the navbar when scrolling down past 100px, shows it when scrolling back up.
	// The cleanup function removes the listener when the component unmounts.
	useEffect(() => {
		const controlNavbar = () => {
			if (typeof window !== 'undefined') {
				if (window.scrollY > lastScrollY && window.scrollY > 100) {
					setShowNavbar(false)
				} else {
					setShowNavbar(true)
				}
				setLastScrollY(window.scrollY)
			}
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar)
			return () => {
				window.removeEventListener('scroll', controlNavbar) // cleanup on unmount
			}
		}
	}, [lastScrollY])

	// ─── handleSearch ─────────────────────────────────────────────────────────
	// Called by the search button click or Enter key.
	// Guards against short queries — only fires onSearch if input is 3+ characters.
	const handleSearch = (e) => {
		e.preventDefault()
		if (searchQuery.length >= 3 && onSearch) {
			onSearch(searchQuery)
		}
	}

	// ─── handleKeyPress ───────────────────────────────────────────────────────
	// Allows the user to submit the search by pressing Enter,
	// without needing to click the search button.
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSearch(e)
		}
	}

	// ─── handleInputChange ────────────────────────────────────────────────────
	// Fires on every keystroke. Triggers a live search at 3+ characters,
	// and resets results when the field is empty or falls below 3 characters.
	const handleInputChange = (e) => {
		const value = e.target.value
		setSearchQuery(value)
		if (value.length >= 3 || value.length === 0) {
			if (onSearch) onSearch(value)
		} else {
			if (onSearch) onSearch('') // clear results for 1–2 character inputs
		}
	}

	// ─── handleClear ──────────────────────────────────────────────────────────
	// Resets the search input and clears results, then refocuses
	// the input so the user can start a new search immediately.
	const handleClear = () => {
		setSearchQuery('')
		if (onSearch) onSearch('')
		inputRef.current?.focus()
	}

	// ─── closeMenu ────────────────────────────────────────────────────────────
	// Collapses the burger menu. Called when a nav link is clicked
	// or the overlay behind the open menu is tapped.
	const closeMenu = () => {
		setShowLinks(false)
	}

	return (
		<>
			{/* ── Navbar wrapper ──────────────────────────────────────────────────
          Toggles between navbar-visible / navbar-hidden based on scroll direction.
          CSS handles the show/hide transition on these classes. */}
			<nav className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
				<div className='nav-center'>
					{/* ── Burger menu toggle ──────────────────────────────────────────
              Flips showLinks true/false to open and close the mobile menu. */}
					<div className='nav-header'>
						<button type='button' className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
							<i className='fas fa-bars'></i>
						</button>
					</div>

					{/* ── Navigation links ────────────────────────────────────────────
              Rendered from pageLinks data. show-links class makes them
              visible on mobile when the burger menu is open.
              Each link calls closeMenu to collapse the menu after navigation. */}
					<ul className={showLinks ? 'nav-links show-links' : 'nav-links'}>
						{pageLinks.map((link) => (
							<li key={link.id}>
								<a href={link.href} className='nav-link' onClick={closeMenu}>
									{link.text}
								</a>
							</li>
						))}
					</ul>

					{/* ── Search bar ──────────────────────────────────────────────────
              Contains the input, a conditional clear button, and a search button.
              The clear button only renders when searchQuery is not empty. */}
					<div className='nav-search'>
						<div className='search-container'>
							<input
								ref={inputRef}
								type='text'
								value={searchQuery}
								onChange={handleInputChange}
								onKeyUp={handleKeyPress}
								placeholder='First 3 characters of the band or artist...'
								className='search-input'
							/>

							{/* Clear button — hidden when input is empty */}
							{searchQuery && (
								<button type='button' onClick={handleClear} className='search-clear' aria-label='Clear search'>
									<i className='fas fa-times'></i>
								</button>
							)}

							<button type='button' onClick={handleSearch} className='search-button'>
								<i className='fas fa-search'></i>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* ── Overlay ───────────────────────────────────────────────────────────
          Full-screen backdrop behind the open burger menu on mobile.
          Clicking it calls closeMenu so the user can dismiss the menu
          by tapping anywhere outside it. */}
			<div className={showLinks ? 'nav-overlay active' : 'nav-overlay'} onClick={closeMenu} />
		</>
	)
}

export default Navbar
