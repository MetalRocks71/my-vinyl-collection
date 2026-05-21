import { useParams } from 'react-router-dom'
import { aderitopereira } from '../../data'

const AlbumDetailAderito = () => {
	const { id } = useParams() // useParams returns a STRING
	

	// Convert to Number to match your data (id: 1, id: 2, etc.)
	const album = aderitopereira.find((item) => item.id === Number(id))

	if (!album) return <p>Album not found.</p>

	return (
		<section className='section'>

			<div className='collection-card-1' style={{ maxWidth: '600px', margin: '2rem auto' }}>
				<img src={album.image} alt={album.title} className='collection-img-1' />
				<div className='collection-info-1'>
				
				</div>
			</div>
		</section>
	)
}

export default AlbumDetailAderito
