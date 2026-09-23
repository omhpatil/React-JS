import { lazy, Suspense } from "react"

const LazyLoading = lazy(() => import("./lazyLoading.jsx"))

function App() {
  return (
    <>
      <h3>Learning Lazy Loading in React JS</h3>
      
      <Suspense fallback={<p>Loading...</p>}>
        <LazyLoading />
      </Suspense>
    </>
  )
}

export default App
