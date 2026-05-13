import { useParams, useNavigate } from 'react-router-dom'
import { metalcollection } from '../data'

const AlbumDetail = () => {
	const { id } = useParams() // useParams returns a STRING
	const navigate = useNavigate()

	// Convert to Number to match your data (id: 1, id: 2, etc.)
	const album = metalcollection.find((item) => item.id === Number(id))

	if (!album) return <p>Album not found.</p>

	return (
		<section className='section'>
			<button className='btn' onClick={() => navigate(-1)}>
				← Back
			</button>
			<div className='collection-card' style={{ maxWidth: '600px', margin: '2rem auto' }}>
				<img src={album.image} alt={album.title} className='collection-img' />
				<div className='collection-info'>
					<div className='collection-title'>
						<h4>{album.title}</h4>
					</div>
					<div className='collection-footer'>
						<p>{album.band}</p>
						<p>{album.genre}</p>
						<p className='collection-length'>{album.length}</p>
						<p>{album.date}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AlbumDetail
