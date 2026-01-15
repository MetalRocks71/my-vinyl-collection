import { pageLinks, socialLinks } from '../data'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

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
