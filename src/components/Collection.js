import { useState } from 'react'
import Title from './Title'
import { collection } from '../data'

const Collection = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  // Sort collection alphabetically by band name before rendering with operator
  const sortedCollection = [...collection].sort((a, b) =>
    a.band.localeCompare(b.band)
  )

  return (
    <section className="section collection" id="collection">
      <Title title="The " subtitle="Collection" />
      <div>
        <button className="category-btn" onClick={toggle}>
          Heavy Metal
        </button>
        {open && (
          <div className="section-center featured-center">
            {sortedCollection.map((collection) => {
              const { id, image, title, band, date, length, genre } = collection
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
                    <div className="collection-footer">
                      <div>
                        <p>
                          <span>
                            <i className="fas fa-map"></i>
                          </span>{' '}
                          {band}
                        </p>
                        <p>
                          <span>
                            <i className="fas fa-map"></i>
                          </span>{' '}
                          {genre}
                        </p>
                        <p className="collection-length">{length}</p>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
export default Collection
