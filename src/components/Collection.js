import { useState, useEffect, useRef } from 'react'
import Title from './Title'
import { supabase } from '../supabaseClient' // Add this import

const Collection = ({ searchQuery }) => {
  const [open, setOpen] = useState(false)
  const [vinyls, setVinyls] = useState([]) // Add state for vinyls
  const [loading, setLoading] = useState(true) // Add loading state
  const sectionRef = useRef(null)

  // Fetch vinyls from Supabase on component mount
  useEffect(() => {
    fetchVinyls()
  }, [])

  async function fetchVinyls() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('vinyls')
        .select('*')
        .order('band', { ascending: true })

      if (error) throw error
      setVinyls(data || [])
    } catch (error) {
      console.error('Error fetching vinyls:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggle = () => {
    setOpen(!open)
  }

  // scroll to section when searchQuery changes
  useEffect(() => {
    if (!searchQuery || !sectionRef.current) return

    // Calculate filtered collection inside useEffect
    const filtered = vinyls.filter((item) => {
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
  }, [searchQuery, vinyls]) // Add vinyls to dependency array

  // Filter and sort collection based on search query
  const filteredCollection = vinyls.filter((item) => {
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

  // Show loading state
  if (loading) {
    return (
      <section
        className="section collection"
        id="metalcollection"
        ref={sectionRef}>
        <Title title="The " subtitle="Metal Collection" />
        <div className="loading">Loading your collection...</div>
      </section>
    )
  }

  return (
    <section
      className="section collection"
      id="metalcollection"
      ref={sectionRef}>
      <Title title="The " subtitle="Metal Collection" />
      <div>
        <button className="category-btn" onClick={toggle}>
          Metal and Subgenres ({sortedCollection.length})
          {searchQuery && ` (${sortedCollection.length} results)`}
        </button>
        {shouldOpen && (
          <div className="section-center featured-center">
            {sortedCollection.length > 0 ? (
              sortedCollection.map((item) => {
                const { id, image, title, band, date, length, genre } = item
                return (
                  <article className="collection-card" key={id}>
                    <div className="collection-img-container">
                      <img src={image} className="collection-img" alt={title} />
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
        )}
      </div>
    </section>
  )
}
export default Collection
