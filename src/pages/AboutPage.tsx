import { Link, useLocation } from 'react-router'

export default function AboutPage() {
  const { pathname } = useLocation()

  return (
    <>
      <section className="hero" aria-labelledby="page-title">
        <p className="kicker">Client-side routing</p>
        <h1 id="page-title">Routes without a server.</h1>
        <p className="intro">
          React Router rendered this page in the browser. Reload it or open it in a new tab: Nginx
          answers paths that are not files with <code>index.html</code>, so deep links work without
          extra configuration.
        </p>
        <div className="actions">
          <Link className="primary" to="/">
            Back to home
          </Link>
          <a href="https://reactrouter.com/">Learn React Router</a>
        </div>
      </section>

      <section className="details" aria-labelledby="route-title">
        <div>
          <p className="number">02</p>
          <h2 id="route-title">This route</h2>
          <p>Add a page in <code>src/pages</code> and a route for it in <code>src/App.tsx</code>.</p>
        </div>
        <dl>
          <div>
            <dt>Path</dt>
            <dd>
              <code>{pathname}</code>
            </dd>
          </div>
          <div>
            <dt>Rendered by</dt>
            <dd>React Router</dd>
          </div>
          <div>
            <dt>Served as</dt>
            <dd>
              <code>index.html</code>
            </dd>
          </div>
        </dl>
      </section>
    </>
  )
}
