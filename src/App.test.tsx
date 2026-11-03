import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App', () => {
  afterEach(cleanup)

  it('renders the home page', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Your React app is running.')
    expect(screen.getByText(/^React \d+\.\d+/)).toBeTruthy()
  })

  it('navigates to the about page without a page load', () => {
    renderAt('/')

    fireEvent.click(screen.getByRole('link', { name: 'See client-side routing' }))

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Routes without a server.')
    expect(screen.getByRole('link', { name: 'About' }).classList.contains('active')).toBe(true)
  })

  it('renders the not found page for unknown paths', () => {
    renderAt('/missing')

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Page not found.')
    expect(screen.getByText('/missing')).toBeTruthy()
  })
})
