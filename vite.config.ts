import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// Host names the development server answers for. Wodby sets WODBY_HOSTS to a
// JSON array of the environment's domains and WODBY_APP_SERVICE_NAME to the
// internal service name. Vite always allows localhost and IP addresses.
function allowedHosts(): string[] {
  const hosts: string[] = []
  try {
    const parsed: unknown = JSON.parse(process.env.WODBY_HOSTS || '[]')
    if (Array.isArray(parsed)) {
      hosts.push(...parsed.filter((host): host is string => typeof host === 'string'))
    }
  } catch {
    console.warn('WODBY_HOSTS is not a JSON array; ignoring it')
  }
  if (process.env.WODBY_APP_SERVICE_NAME) {
    hosts.push(process.env.WODBY_APP_SERVICE_NAME)
  }
  return hosts
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Shown on the home page; a new value confirms that a new build is deployed.
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  server: {
    allowedHosts: allowedHosts(),
  },
  test: {
    environment: 'jsdom',
  },
})
