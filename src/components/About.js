import aboutImg from '../images/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subtitle="The Music" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>My Passion for the Heavy Music</h3>
          <p>
            I've always been drawn to the raw power and intensity of heavy metal
            music. There's something about the thundering drums, the blistering
            guitar riffs, and those soaring vocals that speaks directly to my
            soul in a way no other genre can match.
          </p>
          <p>
            For me, metal isn't just music—it's an experience, a release, a
            celebration of everything bold and uncompromising. Whether it's the
            technical virtuosity of progressive metal, the relentless energy of
            thrash, or the emotional depth of doom, each subgenre offers its own
            unique journey. I find myself constantly discovering new bands,
            diving into their discographies, and marveling at the sheer
            creativity and musicianship on display.
          </p>
          <p>
            Beyond the music itself, I love the sense of community that comes
            with being a metalhead. The camaraderie among fans, the shared
            passion for the genre, and the electrifying atmosphere at live shows
            all contribute to an unparalleled experience. Attending concerts and
            festivals is like stepping into another world, where everyone is
            united by their love for the music.
          </p>
          <p>
            Metal has also taught me to appreciate authenticity and staying true
            to yourself, no matter what anyone else thinks. The genre has always
            existed outside the mainstream, proud and defiant, and that
            rebellious spirit resonates deeply with me. It's music that refuses
            to compromise, and that's exactly why I love it so much.
          </p>
          <a href="#about the music" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}
export default About
