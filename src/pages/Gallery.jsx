import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageGallery from '../components/ImageGallery'
import galleryData from '../data/gallery.json'
import erasData from '../data/eras.json'
import './Gallery.css'

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedEra, setSelectedEra] = useState(null)

  const categories = [...new Set(galleryData.map(g => g.category))]

  const filteredGalleries = galleryData.filter(gallery => {
    if (selectedCategory && gallery.category !== selectedCategory) return false
    if (selectedEra && gallery.eraId !== selectedEra) return false
    return true
  })

  const totalImages = filteredGalleries.reduce((sum, gallery) => sum + gallery.images.length, 0)

  return (
    <div className="gallery-page">
      <header className="gallery-header-section">
        <h1 className="gallery-title">Hardware & Archive Gallery</h1>
        <p className="gallery-subtitle">
          Explore the iconic hardware that shaped gaming history
        </p>
      </header>

      <div className="gallery-filters">
        <div className="filter-group">
          <label>Category:</label>
          <div className="filter-buttons">
            <button
              className={`filter-button ${!selectedCategory ? 'active' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label>Era:</label>
          <div className="filter-buttons">
            <button
              className={`filter-button ${!selectedEra ? 'active' : ''}`}
              onClick={() => setSelectedEra(null)}
            >
              All Eras
            </button>
            {erasData.map(era => (
              <button
                key={era.id}
                className={`filter-button ${selectedEra === era.id ? 'active' : ''}`}
                onClick={() => setSelectedEra(era.id)}
                style={selectedEra === era.id ? { background: era.color, borderColor: era.color } : {}}
              >
                {era.name}
              </button>
            ))}
          </div>
        </div>

        {(selectedCategory || selectedEra) && (
          <button
            onClick={() => {
              setSelectedCategory(null)
              setSelectedEra(null)
            }}
            className="clear-filters-button"
          >
            Clear Filters
          </button>
        )}
      </div>

      <div className="gallery-stats">
        <div className="stat-item">
          <span className="stat-icon">🖼️</span>
          <span className="stat-value">{filteredGalleries.length}</span>
          <span className="stat-label">Collections</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">📸</span>
          <span className="stat-value">{totalImages}</span>
          <span className="stat-label">Images</span>
        </div>
      </div>

      <div className="galleries-container">
        {filteredGalleries.map((gallery) => {
          const era = erasData.find(e => e.id === gallery.eraId)

          return (
            <div key={gallery.id} className="gallery-section">
              {era && (
                <div className="gallery-era-badge">
                  <Link to={`/era/${era.id}`} style={{ color: era.color }}>
                    {era.name}
                  </Link>
                </div>
              )}
              <ImageGallery gallery={gallery} />
            </div>
          )
        })}
      </div>

      {filteredGalleries.length === 0 && (
        <div className="no-galleries">
          <p>No galleries match your filters. Try different criteria.</p>
        </div>
      )}
    </div>
  )
}

export default Gallery
