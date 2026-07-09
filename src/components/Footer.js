
import { pageLinks, socialLinks, logo } from '../data'

const Footer = () => {
  return (
		<footer className='section footer'>
			<ul className='footer-links'>
				{pageLinks.map((link) => {
					return (
						<li key={link.id} className='footer-link' id='footer-link'>
							<a href={link.href} className='footer-link'>
								{link.text}
							</a>
						</li>
					)
				})}
			</ul>
			<ul className='footer-icons'>
				<ul className='footer-icons'>
					{socialLinks.map((link) => {
						const { id, href, icon } = link
						return (
							<li key={id}>
								<a href={href} target='_blank' rel='noopener noreferrer' className='footer-icon'>
									<i className={icon}></i>
								</a>
							</li>
						)
					})}
				</ul>
			</ul>
			<div className='text-center'>
				<p className='copyright'>
					All rights reserved ©
					<br />
					<br /> Band name, images, audio recordings, logos,
					<br />
					and all associated intellectual property belong to the bands cited in this website and are protected by
					copyright and trademark laws.
					<br />
					All biographical information and album details are sourced from publicly available materials and are intended
					for educational and informational purposes only.
					<br />
					<br />
					<strong>Sources:</strong> Wikipedia, AllMusic, and official band websites.
					<br />
					<strong>Disclaimer:</strong> This website may contain links to external websites. We are not responsible for the content,
					accuracy, or availability of these external sites, nor do we endorse any views or information presented on
					them. Accessing external links is at your own risk.
				</p>
				<p className='copyright'>
					Copyright &copy;13thGhost
					<span id='date'>{new Date().getFullYear()}</span>
				</p>
				<div className='logo-footer'>
					{logo.map((item) => {
						const { id, image } = item
						return <img key={id} src={image} className='footer-logo' alt='logo' />
					})}
				</div>
			</div>
		</footer>
	)
}
export default Footer
