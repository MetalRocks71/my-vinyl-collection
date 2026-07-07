import { useParams } from 'react-router-dom'
import { songList } from '../../data'

const AlbumSongList = () => {
	const { id } = useParams()

	const albumSongs = songList.find((item) => item.id === Number(id))

	if (!albumSongs) return <p>Album not found.</p>

	return (
		<section className='section detail-section'>
			<div className='detail-wrapper'>
				<div className='album-cover-wrapper'>
					<img src={albumSongs.cover} alt={albumSongs.album} className='collection-img-1' />

					<div className='album-songs-overlay'>
						<h2 className='detail-album-title'>{albumSongs.album}</h2>
						<p className='detail-album-year'>{albumSongs.year}</p>

						<ul className='songs-overlay-list'>
							{albumSongs.albumSongs.map((song) => (
								<li key={song.id} className='song-overlay-item'>
									<span className='song-overlay-title'>{song.title}</span>
									<span className='song-overlay-length'>{song.length}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AlbumSongList
