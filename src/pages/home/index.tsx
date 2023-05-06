import reactLogo from '@/assets/img/react.svg'
import s from './index.scss'

const Home = (props: { title: string }) => {
  return (
    <div className={s.container}>
      <img src={reactLogo} />
      <h1 className={s.title}>{props.title}</h1>
    </div>
  )
}

export default Home
