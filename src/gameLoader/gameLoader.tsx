import React, {useEffect, useState} from 'react'
import Loading from '../atoms/loading/loading'
import * as styles from './gameLoader.module.scss'

const info = [
  'Loading resources...',
  'Looking for tricky words...',
  'Loading game assets...',
  'Finding matches...',
  'Still waiting? Oh no...',
  'Keep calm and wait for it...',
]

const GameLoader = () => {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i < info.length - 1 ? i + 1 : 0))
    }, 2000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={styles.bigLoader}>
      <Loading />
      <p>{info[index]}</p>
    </div>
  )
}

export default GameLoader
