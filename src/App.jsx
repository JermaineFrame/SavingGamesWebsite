import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import EraDetails from './pages/EraDetails'
import ConsoleDetails from './pages/ConsoleDetails'
import Lessons from './pages/Lessons'
import LessonDetails from './pages/LessonDetails'
import Gallery from './pages/Gallery'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/era/:eraId" element={<EraDetails />} />
            <Route path="/console/:consoleId" element={<ConsoleDetails />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lesson/:lessonId" element={<LessonDetails />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
