import Title from './Title'
import { top } from '../data'
const Tops = () => {
  return (
    <section className="section services" id="top">
      <Title title="Top" subtitle="10 Albums" />
      <div className="section-center services-center">
        {top.map((top) => {
          const { id, icon, title, text } = top
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tops
