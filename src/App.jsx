import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './components/About'
import Writing from './components/Writing'
import Talks from './components/Talks'
import Projects from './components/Projects'
import Moments from './components/Moments'
import ScrollToTop from './components/ScrollToTop'
import './styles/global.css'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav />
        <Footer />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about"    element={<About />} />
            <Route path="/writing"  element={<Writing />} />
            <Route path="/talks"    element={<Talks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/moments"  element={<Moments />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}
