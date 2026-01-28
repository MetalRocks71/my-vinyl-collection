import { useState, useEffect, useRef } from 'react'
import { collectionrock } from '../data'
import Title from './Title'

const Collectionrock = ({ searchQuery }) => {
  const [open, setOpen] = useState(false)
  const sectionRef = useRef(null)

  const toggle = () => {
    setOpen(!open)
  }
// scroll to section when searchQuery changes

  useEffect(() => {
    if (searchQuery && sectionRef.current) {

      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

  }
  )
  // Filter and sort collection based on search query
  const filteredCollection = collectionrock.filter((item) => {
    if (!searchQuery) return true

    const query = searchQuery.toLowerCase()
    // Only search in band name field
    return item.band.toLowerCase().includes(query)
  })

  const sortedCollection = [...filteredCollection].sort((a, b) =>
    a.band.localeCompare(b.band),
  )

  // Auto-open when there's a search query
  const shouldOpen = open || searchQuery

  return (
    <section className="section" id="collectionrock">
      <Title title="The " subtitle="Rock Collection" />
      <div>
        <button className="category-btn" onClick={toggle}>
          Rock and Subgenres({sortedCollection.length})
          {searchQuery && ` (${sortedCollection.length} results)`}
        </button>
        {shouldOpen && (
          <div>
            <div className="section-center featured-center">
              {sortedCollection.length > 0 ? (
                sortedCollection.map((item) => {
                  const { id, image, title, date, band, length, genre } = item
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
                              <span></span> {band}
                            </p>
                            <p>
                              <span></span> {genre}
                            </p>
                            <p className="collection-length">{length}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })
              ) : (
                <div className="no-results">
                  <p>No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
export default Collectionrock
