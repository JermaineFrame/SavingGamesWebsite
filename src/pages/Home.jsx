import Timeline from '../components/Timeline'
import StatsInfographic from '../components/StatsInfographic'
import erasData from '../data/eras.json'
import consolesData from '../data/consoles.json'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <header className="hero">
        <h1 className="hero-title">
          Saving Games
        </h1>
        <p className="hero-subtitle">
          An Interactive Journey Through Video Game History
        </p>
        <p className="hero-description">
          Explore the evolution of gaming from the golden age of arcades to modern consoles.
          Learn about the hardware, the innovations, and the cultural impact that shaped
          the industry we love today.
        </p>
      </header>

      <StatsInfographic consoles={consolesData} />

      <section className="timeline-section">
        <div className="section-header">
          <h2 className="section-title">Timeline of Gaming History</h2>
          <p className="section-description">
            Journey through the decades and discover the consoles that defined each era
          </p>
        </div>
        <Timeline eras={erasData} consoles={consolesData} />
      </section>
    </div>
  )
}

export default Home
