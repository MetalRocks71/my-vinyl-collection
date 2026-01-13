import Title from './Title'
import { collection } from '../data'

const Collection = () => {
  return (
    <section className="section" id="collection">
      <Title title="The " subtitle="Collection" />

      <div className="section-center featured-center">
        {collection.map((collection) => {
          const { id, image, title, date, info, location, duration, cost } =
            collection
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p> {duration}</p>
                  <p>{cost}</p>
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
