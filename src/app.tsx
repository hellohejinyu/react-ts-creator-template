import '@/styles/index.css'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
        <Switch>
          <Route exact path="/" render={() => <Home title="Hello React." />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
