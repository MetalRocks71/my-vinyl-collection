import { pageLinks } from '../data'
import { useState, useEffect } from 'react'

const Navbar = ({ onSearch }) => {
  const [showLinks, setShowLinks] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

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
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const handleSearch = (e) => {
    e.preventDefault()
    // Only search if query has 3 or more characters
    if (searchQuery.length >= 3 && onSearch) {
      onSearch(searchQuery)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    if (onSearch) {
      onSearch(value)
    }
  }

  return (
    <nav
      className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="nav-center">
        <div className="nav-header">
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Fixed: removed nested ul and applied showLinks correctly */}
        <ul className={showLinks ? 'nav-links show-links' : 'nav-links'}>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Search Bar */}

        <div className="nav-search">
          <div className="search-container">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyUp={handleKeyPress}
              placeholder="Type 3 characters minimun"
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
