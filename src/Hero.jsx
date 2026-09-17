import heroImg from './assets/hero.png'
import './hero.css'
function Hero() {
  return (
    <>
      <section id="center">
        <h1>Monster hunting offer</h1>
        <div className="hero">
          <img src={heroImg}  alt="hero" />
          </div>
        <div>
          <p>
            Geralt of Rivia
          </p>
          <a href="tel:+380 00 000 0000">+380 00 000 0000</a>
          <a href="mailto:info@monster.com">info@monster.com</a>
        </div>
      </section>

    </>
  )
}
export default Hero
