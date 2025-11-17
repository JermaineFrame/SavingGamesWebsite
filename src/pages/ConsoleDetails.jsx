import { useParams, Link } from 'react-router-dom'
import consolesData from '../data/consoles.json'
import erasData from '../data/eras.json'
import './ConsoleDetails.css'

function ConsoleDetails() {
  const { consoleId } = useParams()
  const console = consolesData.find(c => c.id === consoleId)
  const era = console ? erasData.find(e => e.id === console.eraId) : null

  if (!console) {
    return (
      <div className="console-not-found">
        <h2>Console not found</h2>
        <Link to="/" className="back-link">← Back to Timeline</Link>
      </div>
    )
  }

  return (
    <div className="console-details-page">
      <Link to="/" className="back-link">← Back to Timeline</Link>

      <div className="console-header">
        <div className="console-image-large">
          <span className="console-icon-large">🎮</span>
          <div className="console-generation-badge">
            Generation {console.generation}
          </div>
        </div>

        <div className="console-header-info">
          <div className="console-manufacturer-tag" style={{ background: era?.color }}>
            {console.manufacturer}
          </div>
          <h1 className="console-name">{console.name}</h1>
          <p className="console-release">Released: {console.releaseYear}</p>
          {era && (
            <Link to={`/era/${era.id}`} className="console-era-link">
              <span style={{ color: era.color }}>◆</span> {era.name} ({era.period})
            </Link>
          )}
        </div>
      </div>

      <div className="console-content">
        <section className="console-about">
          <h2>About</h2>
          <p className="console-description">{console.description}</p>
        </section>

        <section className="console-specs">
          <h2>Technical Specifications</h2>
          <div className="specs-grid">
            {Object.entries(console.specs).map(([key, value]) => (
              <div key={key} className="spec-item">
                <div className="spec-label">
                  {key.toUpperCase().replace(/_/g, ' ')}
                </div>
                <div className="spec-value">{value}</div>
              </div>
            ))}
            <div className="spec-item highlight">
              <div className="spec-label">UNITS SOLD</div>
              <div className="spec-value">{console.unitsSold}</div>
            </div>
          </div>
        </section>

        <section className="console-games">
          <h2>Notable Games</h2>
          <div className="games-grid">
            {console.notableGames.map((game, index) => (
              <div key={index} className="game-card">
                <div className="game-icon">🎯</div>
                <div className="game-name">{game}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="console-context">
          <h2>Historical Context</h2>
          {era && (
            <div className="era-context-card" style={{ borderColor: era.color }}>
              <h3 style={{ color: era.color }}>{era.name}</h3>
              <p className="era-context-description">{era.description}</p>
              <div className="era-events">
                <h4>Key Events of This Era:</h4>
                <ul>
                  {era.keyEvents.map((event, i) => (
                    <li key={i}>{event}</li>
                  ))}
                </ul>
              </div>
              <Link to={`/era/${era.id}`} className="view-era-link" style={{ color: era.color }}>
                Explore this era →
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default ConsoleDetails
