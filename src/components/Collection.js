import Title from './Title'
import { collection } from '../data'

const Collection = () => {
  return (
    <section className="section" id="collection">
      <Title title="The " subtitle="Collection" />

      <div className="section-center featured-center">
        {collection.map((collection) => {
          const { id, image, title, date, info, band, length, genre } =
            collection
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
    </section>
  )
}
export default Collection
