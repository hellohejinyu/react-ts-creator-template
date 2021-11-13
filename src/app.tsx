import '@/styles/index.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import s from './home.scss'
import reactLogo from '@/assets/img/react.svg'

function Home(props: { title: string }) {
  return (
    <div className={s.container}>
      <img src={reactLogo} />
      <h1 className={s.title}>{props.title}</h1>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home title="Hello React." />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
