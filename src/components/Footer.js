
import { pageLinks, socialLinks, logo } from "../data"



const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id} className="footer-link" id="footer-link">
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            const { id, href, icon, } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon">
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </ul>
      <div className="text-center">
        <p className="copyright">
          All rights reserved ©
          <br /> band name, images, audio recordings, logos,
          <br />
          and all associated intellectual property belong to the bands cited
          in this website and are protected by copyright and trademark laws.
        </p>
        <p className="copyright">
          Copyright &copy; 13thGhost
          <span id="date">{new Date().getFullYear()}</span>
        </p>
        <div className="logo-footer">
          {logo.map((item) => {
            const { id, image } = item
            return (
              <img key={id} src={image} className="footer-logo" alt="logo" />
            )
          })}
        </div>
      </div>
    </footer>
  )
}
export default Footer
