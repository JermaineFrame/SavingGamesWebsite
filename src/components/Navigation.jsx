import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🎮</span>
          <span className="logo-text">Saving Games</span>
        </Link>

        <ul className="nav-menu">
          <li>
            <Link
              to="/"
              className={`nav-link ${isActive('/') && location.pathname === '/' ? 'active' : ''}`}
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              to="/lessons"
              className={`nav-link ${isActive('/lesson') ? 'active' : ''}`}
            >
              Lessons
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
