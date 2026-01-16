
import { pageLinks } from "../data"
import { socialLinks } from "../data"

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
                  {pageLinks.map((link) => {
              return (
                <il key={link.id} className="footer-link" id="footer-link">
                  <a href={link.href} className="footer-link">
                    {link.text}
                  </a>
                </il>
              )
            })}
         </ul>
      <ul className="footer-icons">
        <ul className="footer-icons">
                 {socialLinks.map((link) => {
                   const { id, href, icon } = link
                   return (
                     <li key={id}>
                       <a href={href} target="_blank" rel="noopener noreferrer" className="footer-icon">
                         <i className={icon}></i>
                       </a>
                     </li>
                   ) })
                 }
               </ul>
               </ul>
      <p className="copyright">
        copyright &copy; 13thGhost 
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
