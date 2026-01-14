import Title from './Title'
import { top } from '../data'
const Tops = () => {
  return (
    <section className="section tops" id="top">
      <Title title="Top" subtitle="10 Albums" />
      <div className="section-center tops-center">
        {top.map((top) => {
          const { id, icon, title, text } = top
          return (
            <article className="top" key={id}>
              <span className="top-icon">
                <i className={icon}></i>
              </span>
              <div className="top-info">
                <h4 className="top-title">{title}</h4>
                <p className="top-text">{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tops
