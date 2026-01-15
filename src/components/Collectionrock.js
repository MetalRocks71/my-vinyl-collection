import { useState } from 'react'
import { collectionrock } from '../data'

const Collectionrock = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }
  // Sort collection alphabetically by band name
  const sortedCollection = [...collectionrock].sort((a, b) =>
    a.band.localeCompare(b.band)
  )
  return (
    <section className="section" id="collectionrock">
      <div>
        <button className="category-btn" onClick={toggle}>
          Rock
        </button>
        {open && (
          <div>
            <div className="section-center featured-center">
              {sortedCollection.map((collectionrock) => {
                const { id, image, title, date, info, band, length, genre } =
                  collectionrock
                return (
                  <article className="collection-card" key={id}>
                    <div className="collection-img-container">
                      <img src={image} className="collection-img" alt="" />
                      <p className="collection-date">{date}</p>
                    </div>
                    <div className="collection-info">
                      <div className="collection-title">
                        <h4>{title}</h4>
                      </div>
                      <p>{info}</p>
                      <div className="collection-footer">
                        <p>
                          <span>
                            <i className="fas fa-map"></i>
                          </span>{' '}
                          {band}
                        </p>
                        <p> {length}</p>
                        <p>{genre}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
export default Collectionrock
