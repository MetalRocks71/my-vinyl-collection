import { useParams } from 'react-router-dom'
import { artistBioMetal } from '../../data'
import Footer from '../Footer'

const AlbumDetail = () => {
	const { id } = useParams()

	const artistBio = artistBioMetal.find((item) => item.id === Number(id))

	if (!artistBio) return <p>Album not found.</p>

	const bioContent = Array.isArray(artistBio.bio) ? artistBio.bio.join('<br><br>') : artistBio.bio

	return (
		<>
			<section className='section detail-section'>
				<div className='collection-card-1'>
					<img src={artistBio.image2} alt={artistBio.band} className='collection-img-1' />
					<div className='artist-info-1'>
						<p className='detail-artist-bio' dangerouslySetInnerHTML={{ __html: bioContent || 'No bio available.' }} />
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default AlbumDetail
