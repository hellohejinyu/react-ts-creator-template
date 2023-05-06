import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@/styles/index.css'
import reactLogo from '@/assets/img/react.svg'
import s from './home.scss'

function Home(props: { title: string }) {
  return (
    <div className={s.container}>
      <img src={reactLogo} />
      <h1 className={s.title}>{props.title}</h1>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Hello React." />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
