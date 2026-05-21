import { useParams} from 'react-router-dom'
import { artistBioMetal } from '../../data'


const AlbumDetail = () => {
	const { id } = useParams()



	const artistBio = artistBioMetal.find((item) => item.id === Number(id))

	if (!artistBio) return <p>Album not found.</p>

	return (
		<section className='section detail-section'>

			<div className='collection-card-1'>
				<img src={artistBio.image2} alt={artistBio.band} className='collection-img-1' />
				<div className='artist-info-1'>
					<p
						className='detail-artist-bio'
						dangerouslySetInnerHTML={{ __html: artistBio ? artistBio.bio : 'No bio available.' }}
					/>
				</div>


			</div>
		</section>
	)
}

export default AlbumDetail
