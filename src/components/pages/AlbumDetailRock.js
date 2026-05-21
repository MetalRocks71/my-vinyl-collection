import { useParams, useNavigate } from 'react-router-dom'
import { rockcollection } from '../../data'

const AlbumDetailRock = () => {
	const { id } = useParams() // useParams returns a STRING
	const navigate = useNavigate()

	// Convert to Number to match your data (id: 1, id: 2, etc.)
	const album = rockcollection.find((item) => item.id === Number(id))

	if (!album) return <p>Album not found.</p>

	return (
		<section className='section'>
			<button className='btn' onClick={() => navigate(-1)}>
				← Back
			</button>
			<div className='collection-card-1' style={{ maxWidth: '600px', margin: '2rem auto' }}>
				<img src={album.image} alt={album.title} className='collection-img-1' />
				<div className='collection-info-1'>
			
				</div>
			</div>
		</section>
	)
}

export default AlbumDetailRock
