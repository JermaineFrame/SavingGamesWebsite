import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import lessonsData from '../data/lessons.json'
import erasData from '../data/eras.json'
import './LessonDetails.css'

function LessonDetails() {
  const { lessonId } = useParams()
  const lesson = lessonsData.find(l => l.id === lessonId)
  const era = lesson ? erasData.find(e => e.id === lesson.eraId) : null
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  if (!lesson) {
    return (
      <div className="lesson-not-found">
        <h2>Lesson not found</h2>
        <Link to="/lessons" className="back-link">← Back to Lessons</Link>
      </div>
    )
  }

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    })
  }

  const handleSubmitQuiz = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    if (!lesson.content.quiz) return { correct: 0, total: 0 }

    let correct = 0
    lesson.content.quiz.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correct++
      }
    })

    return { correct, total: lesson.content.quiz.length }
  }

  const score = showResults ? calculateScore() : null

  return (
    <div className="lesson-details-page">
      <Link to="/lessons" className="back-link">← Back to Lessons</Link>

      <header className="lesson-hero">
        <div className="lesson-meta-badges">
          <span className="category-badge">{lesson.category}</span>
          <span className="difficulty-badge">{lesson.difficulty}</span>
          <span className="time-badge">⏱️ {lesson.estimatedTime}</span>
        </div>

        <h1 className="lesson-hero-title">{lesson.title}</h1>
        <p className="lesson-hero-description">{lesson.description}</p>

        {era && (
          <Link to={`/era/${era.id}`} className="lesson-era-link">
            Part of: {era.name} ({era.period})
          </Link>
        )}
      </header>

      <div className="lesson-content">
        <section className="lesson-introduction">
          <p className="introduction-text">{lesson.content.introduction}</p>
        </section>

        {lesson.content.sections.map((section, index) => (
          <section key={index} className="lesson-section">
            <h2 className="section-title">
              <span className="section-number">{index + 1}</span>
              {section.title}
            </h2>
            <p className="section-text">{section.text}</p>
          </section>
        ))}

        <section className="lesson-takeaways">
          <h2>Key Takeaways</h2>
          <ul className="takeaways-list">
            {lesson.content.keyTakeaways.map((takeaway, index) => (
              <li key={index}>{takeaway}</li>
            ))}
          </ul>
        </section>

        {lesson.content.quiz && lesson.content.quiz.length > 0 && (
          <section className="lesson-quiz">
            <h2>Test Your Knowledge</h2>
            <p className="quiz-description">
              Answer the questions below to test your understanding of this lesson.
            </p>

            {lesson.content.quiz.map((question, qIndex) => (
              <div key={qIndex} className="quiz-question">
                <h3 className="question-text">
                  Question {qIndex + 1}: {question.question}
                </h3>

                <div className="question-options">
                  {question.options.map((option, oIndex) => {
                    const isSelected = selectedAnswers[qIndex] === oIndex
                    const isCorrect = oIndex === question.answer
                    const showCorrect = showResults && isCorrect
                    const showIncorrect = showResults && isSelected && !isCorrect

                    return (
                      <button
                        key={oIndex}
                        className={`option-button ${isSelected ? 'selected' : ''} ${showCorrect ? 'correct' : ''} ${showIncorrect ? 'incorrect' : ''}`}
                        onClick={() => handleAnswerSelect(qIndex, oIndex)}
                        disabled={showResults}
                      >
                        <span className="option-letter">
                          {String.fromCharCode(65 + oIndex)}
                        </span>
                        <span className="option-text">{option}</span>
                        {showCorrect && <span className="check-mark">✓</span>}
                        {showIncorrect && <span className="x-mark">✗</span>}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}

            {!showResults && (
              <button
                className="submit-quiz-button"
                onClick={handleSubmitQuiz}
                disabled={Object.keys(selectedAnswers).length !== lesson.content.quiz.length}
              >
                Submit Answers
              </button>
            )}

            {showResults && (
              <div className="quiz-results">
                <h3>Your Score</h3>
                <div className="score-display">
                  <span className="score">
                    {score.correct} / {score.total}
                  </span>
                  <span className="percentage">
                    ({Math.round((score.correct / score.total) * 100)}%)
                  </span>
                </div>
                <p className="score-message">
                  {score.correct === score.total
                    ? '🎉 Perfect! You mastered this lesson!'
                    : score.correct >= score.total * 0.7
                    ? '👍 Great job! You have a good understanding.'
                    : '📚 Keep learning! Review the lesson and try again.'}
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  )
}

export default LessonDetails
