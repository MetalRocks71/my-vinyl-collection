import { pageLinks, socialLinks } from '../data'
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
          // scrolling down and past 100px
          setShowNavbar(false)
        } else {
          // scrolling up
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
    if (onSearch) {
      onSearch(searchQuery)
    }
    // Scroll to collection section
    const collectionSection = document.getElementById('collection')
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' })
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
    // Real-time search as user types
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
            id="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* new code starts here */}
        <ul className="nav-links" id="nav-links">
          <ul className={showLinks ? 'nav-links show-links' : 'nav-links'}></ul>
          {pageLinks.map((link) => {
            return (
              <li key={link.id} id="nav-links">
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Search Bar */}
        <div className="nav-search">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            placeholder="Search artists..."
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
