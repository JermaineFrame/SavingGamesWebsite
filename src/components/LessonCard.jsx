import { Link } from 'react-router-dom'
import './LessonCard.css'

function LessonCard({ lesson }) {
  const getCategoryColor = (category) => {
    const colors = {
      'History': '#f59e0b',
      'Technology': '#06b6d4',
      'Business': '#8b5cf6',
      'Culture': '#ec4899'
    }
    return colors[category] || '#6366f1'
  }

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': '#10b981',
      'Intermediate': '#f59e0b',
      'Advanced': '#ef4444'
    }
    return colors[difficulty] || '#6366f1'
  }

  return (
    <Link to={`/lesson/${lesson.id}`} className="lesson-card">
      <div className="lesson-header">
        <div
          className="lesson-category"
          style={{ background: getCategoryColor(lesson.category) }}
        >
          {lesson.category}
        </div>
        <div
          className="lesson-difficulty"
          style={{ borderColor: getDifficultyColor(lesson.difficulty) }}
        >
          {lesson.difficulty}
        </div>
      </div>

      <div className="lesson-content">
        <h3 className="lesson-title">{lesson.title}</h3>
        <p className="lesson-description">{lesson.description}</p>

        <div className="lesson-meta">
          <div className="meta-item">
            <span className="meta-icon">⏱️</span>
            <span>{lesson.estimatedTime}</span>
          </div>
          {lesson.content && lesson.content.sections && (
            <div className="meta-item">
              <span className="meta-icon">📚</span>
              <span>{lesson.content.sections.length} sections</span>
            </div>
          )}
        </div>
      </div>

      <div className="lesson-footer">
        <span className="lesson-cta">Start Learning →</span>
      </div>
    </Link>
  )
}

export default LessonCard
