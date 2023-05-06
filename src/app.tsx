import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@/styles/index.css'

const Home = lazy(() => import('@/pages/home'))

const App = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home title="Hello React." />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
