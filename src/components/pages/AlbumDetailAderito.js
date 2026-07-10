import { useParams, useNavigate } from 'react-router-dom'
import { artistBioAderito } from '../../data'
import Footer from '../Footer'

const AlbumDetailAderito = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const artistBio = artistBioAderito.find((item) => item.id === Number(id))

	if (!artistBio) return <p>Album not found.</p>

	const bioContent = Array.isArray(artistBio.bio) ? artistBio.bio.join('<br><br>') : artistBio.bio

	return (
		<>
			<section className='section detail-section'>
				<div className='detail-wrapper-2'>
					<div className='collection-card-1'>
						<img src={artistBio.image2} alt={artistBio.band} className='collection-img-1' />
						<div className='artist-info-1'>
							<p
								className='detail-artist-bio'
								dangerouslySetInnerHTML={{ __html: bioContent || 'No bio available.' }}
							/>
						</div>
					</div>

					<div className='artist-albums-list'>
						<h3 className='section-title-albums'>Albums</h3>
						<div className='albums-grid'>
							{artistBio.albums.map((album) => (
								<div
									key={album.id}
									className='album-item'
									onClick={() => navigate(`/albumSongs/${album.id}`)}
									tabIndex={0}
									role='button'>
									<img src={album.cover} alt={album.title} className='imageDetail' />
									<p className='album-title-list'>{album.title}</p>
									<p className='album-year-list'>{album.year}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default AlbumDetailAderito
