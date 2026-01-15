import { useState } from 'react'
import Title from './Title'
import { top } from '../data'

const Tops = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedTops = showAll ? top : top.slice(0, 5)

  return (
    <section className="section tops" id="top">
      <Title title="Top" subtitle="10 Albums" />
      <div className="section-center tops-center">
        {displayedTops.map((top) => {
          const { id, icon, title, text, image } = top
          return (
            <article className="top" key={id}>
              <span className="top-icon">
                <i className={icon}></i>
              </span>
              <div className="top-info">
                <h4 className="top-title">{title}</h4>
                <p className="top-text">{text}</p>
                <img src={image} alt={title} />
              </div>
            </article>
          )
        })}
      </div>
      <button className="category-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </section>
  )
}

export default Tops
