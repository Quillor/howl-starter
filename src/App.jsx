import posts from './data/posts.json'

// Starter screen. In the lesson, Copilot replaces this with Howl's real layout (Phase 4).
export default function App() {
  const spots = new Set(posts.map((p) => p.spot).filter(Boolean))

  return (
    <main className="starter">
      <p className="starter-wordmark">Howl</p>
      <h1>Your copy of Howl is running.</h1>
      <p>
        This is the starting point. There are {posts.length} sample posts from {spots.size} campus
        spots waiting in <code>src/data/posts.json</code>.
      </p>
      <p className="starter-next">Next: go back to the lesson and start Phase 1.</p>
    </main>
  )
}
