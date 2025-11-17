import { useState } from 'react'
import LessonCard from '../components/LessonCard'
import lessonsData from '../data/lessons.json'
import './Lessons.css'

function Lessons() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)

  const categories = [...new Set(lessonsData.map(l => l.category))]
  const difficulties = ['Beginner', 'Intermediate', 'Advanced']

  const filteredLessons = lessonsData.filter(lesson => {
    if (selectedCategory && lesson.category !== selectedCategory) return false
    if (selectedDifficulty && lesson.difficulty !== selectedDifficulty) return false
    return true
  })

  return (
    <div className="lessons-page">
      <header className="lessons-header">
        <h1 className="lessons-title">Educational Lessons</h1>
        <p className="lessons-subtitle">
          Deep dive into the history, technology, and culture of video games
        </p>
      </header>

      <div className="lessons-filters">
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
          <label>Difficulty:</label>
          <div className="filter-buttons">
            <button
              className={`filter-button ${!selectedDifficulty ? 'active' : ''}`}
              onClick={() => setSelectedDifficulty(null)}
            >
              All
            </button>
            {difficulties.map(difficulty => (
              <button
                key={difficulty}
                className={`filter-button ${selectedDifficulty === difficulty ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="lessons-stats">
        <div className="stat">
          <span className="stat-number">{filteredLessons.length}</span>
          <span className="stat-label">
            {filteredLessons.length === 1 ? 'Lesson' : 'Lessons'} Available
          </span>
        </div>
      </div>

      <div className="lessons-grid">
        {filteredLessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>

      {filteredLessons.length === 0 && (
        <div className="no-lessons">
          <p>No lessons match your filters. Try different criteria.</p>
        </div>
      )}
    </div>
  )
}

export default Lessons
