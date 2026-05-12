import { useRef } from 'react'

const GlowAlbumCard = ({ id, image, title, band, date, length, genre }) => {
	const cardRef = useRef(null)
	const coverRef = useRef(null)

	// shared logic (mouse + touch)
	const updatePosition = (clientX, clientY) => {
		const card = cardRef.current
		const cover = coverRef.current

		if (!card || !cover) return

		const rect = card.getBoundingClientRect()
		const x = clientX - rect.left
		const y = clientY - rect.top

		const centerX = rect.width / 2
		const centerY = rect.height / 2

		const percentX = (x / rect.width) * 100
		const percentY = (y / rect.height) * 100

		const rotateX = ((y - centerY) / centerY) * -10
		const rotateY = ((x - centerX) / centerX) * 10

		card.style.setProperty('--mouse-x', `${percentX}%`)
		card.style.setProperty('--mouse-y', `${percentY}%`)

		cover.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `

		const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI)
		card.style.setProperty('--angle', `${angle}deg`)
	}

	// desktop
	const handleMouseMove = (e) => {
		updatePosition(e.clientX, e.clientY)
	}

	// mobile (finger move)
	const handleTouchMove = (e) => {
		const touch = e.touches[0]
		updatePosition(touch.clientX, touch.clientY)

		// activate glow manually (replaces :hover)
		cardRef.current.classList.add('active')
	}

	const handleTouchStart = () => {
		cardRef.current.classList.add('active')
	}

	const resetCard = () => {
		const card = cardRef.current
		const cover = coverRef.current

		if (!card || !cover) return

		cover.style.transform = 'rotateX(0) rotateY(0) scale(1)'
		card.style.setProperty('--mouse-x', '50%')
		card.style.setProperty('--mouse-y', '50%')

		card.classList.remove('active')
	}

	return (
		<article
			className='collection-card album-card'
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={resetCard}
			// ✅ TOUCH SUPPORT
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={resetCard}
			onTouchCancel={resetCard}
			onClick={() => console.log(id)}>
			{/* glow background */}
			<div className='glow-layer'></div>

			<div className='collection-img-container album-cover' ref={coverRef}>
				<img src={image} className='collection-img' alt='' />

				{/* glow effects */}
				<div className='edge-glow'></div>
				<div className='shine-effect'></div>
				<div className='border-glow'></div>

				<p className='collection-date'>{date}</p>

				<div className='album-overlay'>
					<div className='album-info'>
						<div className='album-title'>{title}</div>
						<div className='album-artist'>{band}</div>
					</div>
				</div>
			</div>

			<div className='collection-info'>
				<div className='collection-title'>
					<h4>{title}</h4>
				</div>

				<div className='collection-footer'>
					<div>
						<p>{band}</p>
						<p>{genre}</p>
						<p className='collection-length'>{length}</p>
					</div>
				</div>
			</div>
		</article>
	)
}

export default GlowAlbumCard
