import { pageLinks, socialLinks } from '../data'
import { useState } from 'react'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav className="navbar">
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
              <li key={link.id} className="nav-links" id="nav-links">
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
