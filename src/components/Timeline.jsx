import { useState } from 'react'
import { Link } from 'react-router-dom'
import TimelineEvent from './TimelineEvent'
import './Timeline.css'

function Timeline({ eras, consoles }) {
  const [selectedEra, setSelectedEra] = useState(null)
  const [selectedManufacturer, setSelectedManufacturer] = useState(null)

  // Get unique manufacturers
  const manufacturers = [...new Set(consoles.map(c => c.manufacturer))].sort()

  // Filter consoles based on selections
  const filteredConsoles = consoles.filter(console => {
    if (selectedEra && console.eraId !== selectedEra) return false
    if (selectedManufacturer && console.manufacturer !== selectedManufacturer) return false
    return true
  })

  return (
    <div className="timeline-container">
      <div className="timeline-filters">
        <div className="filter-group">
          <label>Filter by Era:</label>
          <select
            value={selectedEra || ''}
            onChange={(e) => setSelectedEra(e.target.value || null)}
            className="filter-select"
          >
            <option value="">All Eras</option>
            {eras.map(era => (
              <option key={era.id} value={era.id}>
                {era.name} ({era.period})
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Filter by Manufacturer:</label>
          <select
            value={selectedManufacturer || ''}
            onChange={(e) => setSelectedManufacturer(e.target.value || null)}
            className="filter-select"
          >
            <option value="">All Manufacturers</option>
            {manufacturers.map(manufacturer => (
              <option key={manufacturer} value={manufacturer}>
                {manufacturer}
              </option>
            ))}
          </select>
        </div>

        {(selectedEra || selectedManufacturer) && (
          <button
            onClick={() => {
              setSelectedEra(null)
              setSelectedManufacturer(null)
            }}
            className="clear-filters"
          >
            Clear Filters
          </button>
        )}
      </div>

      <div className="timeline">
        <div className="timeline-line" />

        {eras.map((era, index) => {
          const eraConsoles = filteredConsoles.filter(c => c.eraId === era.id)
          if (eraConsoles.length === 0 && (selectedEra || selectedManufacturer)) return null

          return (
            <div key={era.id} className="timeline-era">
              <div className="era-header" style={{ borderColor: era.color }}>
                <Link to={`/era/${era.id}`} className="era-title-link">
                  <h2 className="era-title" style={{ color: era.color }}>
                    {era.name}
                  </h2>
                  <p className="era-period">{era.period}</p>
                </Link>
                <p className="era-description">{era.description}</p>

                <div className="era-key-events">
                  <h4>Key Events:</h4>
                  <ul>
                    {era.keyEvents.map((event, i) => (
                      <li key={i}>{event}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="timeline-events">
                {eraConsoles.map((console, i) => (
                  <TimelineEvent
                    key={console.id}
                    console={console}
                    index={i}
                    eraColor={era.color}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {filteredConsoles.length === 0 && (
        <div className="no-results">
          <p>No consoles match your filters. Try different criteria.</p>
        </div>
      )}
    </div>
  )
}

export default Timeline
