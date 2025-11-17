import { Link } from 'react-router-dom'
import './TimelineEvent.css'

function TimelineEvent({ console, index, eraColor }) {
  return (
    <div className="timeline-event" style={{ animationDelay: `${index * 0.1}s` }}>
      <Link to={`/console/${console.id}`} className="event-card">
        <div className="event-header" style={{ borderTopColor: eraColor }}>
          <div className="event-year" style={{ background: eraColor }}>
            {console.releaseYear}
          </div>
          <div className="event-manufacturer">{console.manufacturer}</div>
        </div>

        <div className="event-image-placeholder">
          <span className="console-icon">🎮</span>
          <div className="generation-badge">Gen {console.generation}</div>
        </div>

        <div className="event-content">
          <h3 className="event-title">{console.name}</h3>
          <p className="event-description">{console.description}</p>

          <div className="event-stats">
            <div className="stat">
              <span className="stat-label">Units Sold</span>
              <span className="stat-value">{console.unitsSold}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Generation</span>
              <span className="stat-value">{console.generation}</span>
            </div>
          </div>

          <div className="event-games">
            <h4>Notable Games:</h4>
            <ul>
              {console.notableGames.slice(0, 3).map((game, i) => (
                <li key={i}>{game}</li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TimelineEvent
