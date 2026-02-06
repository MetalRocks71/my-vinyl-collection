import { useState, useEffect, useRef } from 'react'
import { aderitopereira } from '../data'
import Title from './Title'

//search query with open collection section

const Collectionrock = ({ searchQuery }) => {
  const [open, setOpen] = useState(false)
  const sectionRef = useRef(null)

  const toggle = () => {
    setOpen(!open)
  }
  // scroll to section when searchQuery changes
  useEffect(() => {
    if (!searchQuery || !sectionRef.current) return

    // Calculate filtered collection inside useEffect
    const filtered = aderitopereira.filter((item) => {
      const query = searchQuery.toLowerCase()
      return item.band.toLowerCase().includes(query)
    })

    if (filtered.length > 0) {
      const yOffset = -80
      const element = sectionRef.current
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [searchQuery])

  // Filter and sort collection based on search query
  const filteredCollection = aderitopereira.filter((item) => {
    // Show all items if no search query OR query is less than 3 characters
    if (!searchQuery || searchQuery.length < 3) return true

    const query = searchQuery.toLowerCase()
    // Only search in band name field when query is 3+ characters
    return item.band.toLowerCase().includes(query)
  })

  // sort the collection by band and then title album
  const sortedCollection = [...filteredCollection].sort(
    (a, b) =>
      a.band.localeCompare(b.band, undefined, { sensitivity: 'base' }) ||
      a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }),
  )

  // Auto-open when there's a search query
  const shouldOpen = open || searchQuery

  return (
    <section className="section" id="aderitopereira" ref={sectionRef}>
      <Title title="The " subtitle="Aderito P. Collection" />
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
