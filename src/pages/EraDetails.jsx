import { useParams, Link } from 'react-router-dom'
import TimelineEvent from '../components/TimelineEvent'
import erasData from '../data/eras.json'
import consolesData from '../data/consoles.json'
import lessonsData from '../data/lessons.json'
import './EraDetails.css'

function EraDetails() {
  const { eraId } = useParams()
  const era = erasData.find(e => e.id === eraId)
  const eraConsoles = consolesData.filter(c => c.eraId === eraId)
  const eraLessons = lessonsData.filter(l => l.eraId === eraId)

  if (!era) {
    return (
      <div className="era-not-found">
        <h2>Era not found</h2>
        <Link to="/" className="back-link">← Back to Timeline</Link>
      </div>
    )
  }

  return (
    <div className="era-details-page">
      <Link to="/" className="back-link">← Back to Timeline</Link>

      <header className="era-hero" style={{ borderColor: era.color }}>
        <h1 className="era-hero-title" style={{ color: era.color }}>
          {era.name}
        </h1>
        <p className="era-hero-period">{era.period}</p>
        <p className="era-hero-description">{era.description}</p>
      </header>

      <section className="era-key-events-section">
        <h2 className="section-title">Key Events of This Era</h2>
        <div className="key-events-grid">
          {era.keyEvents.map((event, index) => (
            <div key={index} className="key-event-card" style={{ borderLeftColor: era.color }}>
              <span className="event-number" style={{ background: era.color }}>
                {index + 1}
              </span>
              <p className="event-text">{event}</p>
            </div>
          ))}
        </div>
      </section>

      {eraLessons.length > 0 && (
        <section className="era-lessons-section">
          <h2 className="section-title">Educational Lessons from This Era</h2>
          <div className="lessons-grid">
            {eraLessons.map(lesson => (
              <Link
                key={lesson.id}
                to={`/lesson/${lesson.id}`}
                className="era-lesson-card"
              >
                <h3 className="lesson-title">{lesson.title}</h3>
                <p className="lesson-description">{lesson.description}</p>
                <div className="lesson-meta">
                  <span className="lesson-category">{lesson.category}</span>
                  <span className="lesson-time">⏱️ {lesson.estimatedTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="era-consoles-section">
        <h2 className="section-title">
          Consoles from {era.name}
        </h2>
        <div className="consoles-grid">
          {eraConsoles.map((console, index) => (
            <TimelineEvent
              key={console.id}
              console={console}
              index={index}
              eraColor={era.color}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default EraDetails
