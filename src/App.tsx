import { NavLink, Route, Routes } from 'react-router'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

// The application shell: navigation, the page for the current route, and a footer.
// Nginx answers every path that is not a file with index.html, so each route below
// also works when it is opened directly or reloaded.
export default function App() {
  return (
    <>
      <header>
        <NavLink className="brand" to="/">
          React on Wodby
        </NavLink>
        <nav aria-label="Main">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer>
        <span>Built with Vite, served by Nginx</span>
        <a href="https://wodby.com/docs/2.0/">Wodby documentation</a>
      </footer>
    </>
  )
}
