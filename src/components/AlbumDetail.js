import { useParams, useNavigate } from 'react-router-dom'
import { metalcollection, artistBioMetal } from '../data'

const AlbumDetail = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const album = metalcollection.find((item) => item.id === Number(id))
	const artistBio = artistBioMetal.find((item) => item.id === Number(id))

	if (!album) return <p>Album not found.</p>

	return (
		<section className='section detail-section'>
			<button className='btn detail-back-btn' onClick={() => navigate(-1)}>
				← Back
			</button>
			<div className='collection-card-1'>
				<img src={album.image2} alt={album.title} className='collection-img-1' />
				<div className='artist-info-1'>
					{' '}
					{/*INSIDE collection-card-1 */}
					<p className='detail-artist-bio'>{artistBio ? artistBio.bio : 'No bio available.'}</p>
				</div>
			</div>
		</section>
	)
}

export default AlbumDetail
