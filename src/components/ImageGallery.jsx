import { useState } from 'react'
import './ImageGallery.css'

function ImageGallery({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const currentIndex = gallery.images.findIndex(img => img.id === selectedImage.id)
    let newIndex

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % gallery.images.length
    } else {
      newIndex = currentIndex - 1 < 0 ? gallery.images.length - 1 : currentIndex - 1
    }

    setSelectedImage(gallery.images[newIndex])
  }

  return (
    <div className="image-gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">{gallery.title}</h2>
        <div className="gallery-meta">
          <span className="gallery-category">{gallery.category}</span>
          <span className="gallery-count">{gallery.images.length} items</span>
        </div>
      </div>

      <div className="gallery-grid">
        {gallery.images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <div className="gallery-item-placeholder">
              <span className="placeholder-icon">🖼️</span>
              <div className="image-year">{image.year}</div>
            </div>
            <div className="gallery-item-info">
              <h4 className="image-title">{image.title}</h4>
              <p className="image-description">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={() => navigateImage('prev')}
            >
              ‹
            </button>

            <div className="lightbox-image-container">
              <div className="lightbox-image-placeholder">
                <span className="lightbox-placeholder-icon">🖼️</span>
              </div>

              <div className="lightbox-info">
                <h3 className="lightbox-title">{selectedImage.title}</h3>
                <p className="lightbox-year">Year: {selectedImage.year}</p>
                <p className="lightbox-description">{selectedImage.description}</p>
              </div>
            </div>

            <button
              className="lightbox-nav lightbox-next"
              onClick={() => navigateImage('next')}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
