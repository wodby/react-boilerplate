import { Link, useLocation } from 'react-router'

export default function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <section className="hero" aria-labelledby="page-title">
      <p className="kicker">404</p>
      <h1 id="page-title">Page not found.</h1>
      <p className="intro">
        No route matches <code>{pathname}</code>. The catch-all route in <code>src/App.tsx</code>{' '}
        renders this page.
      </p>
      <div className="actions">
        <Link className="primary" to="/">
          Back to home
        </Link>
      </div>
    </section>
  )
}
