import { useState } from 'react'
import Title from './Title'
import { top } from '../data'

const Tops = () => {
const [open, setOpen] = useState(false)
 const toggle = () => {
   setOpen(!open)
 }  

  return (
    <section className="section tops" id="top">
      <Title title="My Top" subtitle="10 Metal Albums" />
      <button className="category-btn" onClick={toggle}>
        The Top 10 Metal Albums
      </button>
      {open && (
      <div className="section-center tops-center">
        {top.map((top) => {
          const { id, title, text, image } = top
          return (
            <article className="top" key={id}>
              <div className="top-info">
                <h4 className="top-title">{title}</h4>
                <p className="top-text">{text}</p>
                <img src={image} alt={title} />
              </div>
            </article>
          )
        })}
      </div>
      )}  
    </section>
  )
}

export default Tops
