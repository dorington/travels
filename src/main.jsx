import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import orbitImage from '../realimage/4a7dee9f588cf3df895a601911394c7487a35867.png'
import fleetImage from '../realimage/4c5fb8bb8981a95e39ef847ebbf338f26a7768fc.png'
import fleetShadow from '../realimage/bb12f2f84713d1c3e7e21a2463a8118f682d6864.png'
import cityVideo from '../realimage/main.mp4'
import logoImage from './assets/bluemoon-executive-logo.png'
import whatsappIcon from './assets/whatsapp-icon.png'
import rollsRoyce from './assets/rolls-royce.png'
import whiteRollsRoyce from './assets/rolls-royce-white.png'
import './styles.css'

const vehicleSlides = [
  {
    image: rollsRoyce,
    make: 'MERCEDES',
    name: 'Benz',
    model: 'CLS 250',
    description: "The Mercedes-Benz GLA 250 is a subcompact luxury crossover SUV that serves as the entry-level SUV in the brand's lineup, blending urban practicality with premium features."
  },
  {
    image: whiteRollsRoyce,
    make: 'MERCEDES',
    name: 'Benz',
    model: 'CLS 250',
    description: "The Mercedes-Benz GLA 250 is a subcompact luxury crossover SUV that serves as the entry-level SUV in the brand's lineup, blending urban practicality with premium features."
  }
]

function BrandMark() {
  return <img className="brand" src={logoImage} alt="Bluemoon Executive" />
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeVehicle, setActiveVehicle] = useState(0)
  const vehicle = vehicleSlides[activeVehicle]

  const scrollToBooking = () => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
  const showPreviousVehicle = () => setActiveVehicle((activeVehicle + vehicleSlides.length - 1) % vehicleSlides.length)
  const showNextVehicle = () => setActiveVehicle((activeVehicle + 1) % vehicleSlides.length)

  return <main className="landing-page">
    <section className="hero" id="top">
      <div className="base-texture" />
      <div className="bg-dark" />
      <div className="skyline" />
      <div className="bg-dark bg-dark-top" />
      <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src={cityVideo} type="video/mp4" />
      </video>
      <div className="blue-wash" />
      <img className="orbit" src={orbitImage} alt="" />
      <img className="orbit orbit-two" src={orbitImage} alt="" />
      <div className="stars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>

      <header className="header">
        <a className="call-link" href="https://wa.me/442080000000" target="_blank" rel="noreferrer" aria-label="Message Bluemoon Executive on WhatsApp">
          <img className="whatsapp-icon" src={whatsappIcon} alt="" /> call now
        </a>
        <BrandMark />
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-menu">
          <span className="menu-icon"><i /><i /><i /></span> MENU
        </button>
        <nav id="main-menu" className={menuOpen ? 'menu open' : 'menu'}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#fleet" onClick={() => setMenuOpen(false)}>Fleet</a>
          <a href="#booking" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <div className="hero-copy">
        <p className="eyebrow">LUXURY</p>
        <h1>CHAUFFEUR SERVICE</h1>
        <p className="city">IN YOUR CITY</p>
      </div>

      <div className="fleet-wrap" id="fleet">
        <img className="car-shadow" src={fleetShadow} alt="" />
        <div className="car-ground-shadow" aria-hidden="true" />
        <img className="fleet" src={fleetImage} alt="Three luxury chauffeur vehicles" />
      </div>

      <div className="bottom-content" id="services">
        <span className="stat-divider-left" aria-hidden="true" />
        <div className="stat stat-left"><strong>300000<span>+</span></strong><small>MILES OF</small><em>safe rides</em></div>
        <div className="actions" id="booking">
          <button className="button button-primary" onClick={scrollToBooking}>BOOK NOW</button>
          <a className="button button-secondary" href="mailto:bookings@bluemoonexecutive.com?subject=Chauffeur%20quote">GET A QUOTE</a>
        </div>
        <span className="stat-divider-right" aria-hidden="true" />
        <div className="stat stat-right"><strong>4000<span>+</span></strong><small>SUCCESSFULL</small><em>events &amp; hires</em></div>
      </div>
    </section>
    <section className="moon-continuation" aria-label="Bluemoon Executive">
      <img className="moon-continuation-orbit moon-continuation-screen" src={orbitImage} alt="" />
      <img className="moon-continuation-orbit moon-continuation-soft" src={orbitImage} alt="" />
      <p className="our-label">OUR</p>
      <h2 className="vehicles-title">VEHICLES</h2>
      <p className="vehicle-label mercedes-label">{vehicle.make}</p>
      <p className="benz-label">{vehicle.name}</p>
      <p className="cls-label">{vehicle.model}</p>
      <svg className="feature-icon steering-icon" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="13" /><circle cx="16" cy="16" r="3" /><path d="M4 13h7l3 3M28 13h-7l-3 3M16 19v10" /></svg>
      <svg className="feature-icon wifi-icon" viewBox="0 0 36 28" aria-hidden="true"><path d="M2 10c9-10 23-10 32 0M7 16c6-6 16-6 22 0M13 22c3-3 7-3 10 0" /><circle cx="18" cy="25" r="1.5" /></svg>
      <svg className="feature-icon flash-icon" viewBox="0 0 24 32" aria-hidden="true"><path d="M14 1 3 18h8l-1 13 11-18h-8z" /></svg>
      <span className="vehicle-number">4</span>
      <span className="passengers-label">passengers</span>
      <span className="feature-label onboard-label">onboard</span>
      <span className="feature-label wifi-label">WI-FI</span>
      <span className="feature-label hybrid-label">hybrid</span>
      <span className="feature-label engine-label">engine</span>
      <p className="vehicle-description">{vehicle.description}</p>
      <div className="rolls-shadow" aria-hidden="true" />
      <img className="rolls-royce" src={vehicle.image} alt={`${vehicle.make} ${vehicle.name} chauffeur vehicle`} />
      <button className="vehicle-arrow vehicle-arrow-prev" type="button" onClick={showPreviousVehicle} aria-label="Previous vehicle"><span /></button>
      <div className="vehicle-dots" aria-label={`Vehicle ${activeVehicle + 1} of ${vehicleSlides.length}`}><i className={activeVehicle === 0 ? 'active' : ''} /><i className={activeVehicle === 1 ? 'active' : ''} /></div>
      <button className="vehicle-arrow vehicle-arrow-next" type="button" onClick={showNextVehicle} aria-label="Next vehicle"><span /></button>
    </section>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
