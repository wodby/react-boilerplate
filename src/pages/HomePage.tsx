import { version } from 'react'
import { Link } from 'react-router'

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="page-title">
        <p className="status">
          <span aria-hidden="true"></span> Static build served by Nginx
        </p>
        <p className="kicker">React + Vite + Wodby</p>
        <h1 id="page-title">Your React app is running.</h1>
        <p className="intro">
          A single-page application with TypeScript, client-side routing and tests. Edit{' '}
          <code>src/pages/HomePage.tsx</code> to start building.
        </p>
        <div className="actions">
          <a className="primary" href="https://react.dev/learn">
            Build with React
          </a>
          <Link to="/about">See client-side routing</Link>
        </div>
      </section>

      <section className="details" aria-labelledby="runtime-title">
        <div>
          <p className="number">01</p>
          <h2 id="runtime-title">Build</h2>
          <p>Values compiled into this bundle when it was built.</p>
        </div>
        <dl>
          <div>
            <dt>Framework</dt>
            <dd>React {version}</dd>
          </div>
          <div>
            <dt>Mode</dt>
            <dd>{import.meta.env.MODE}</dd>
          </div>
          <div>
            <dt>Built at</dt>
            <dd>
              <time dateTime={__BUILD_TIME__}>{new Date(__BUILD_TIME__).toLocaleString()}</time>
            </dd>
          </div>
        </dl>
      </section>
    </>
  )
}
