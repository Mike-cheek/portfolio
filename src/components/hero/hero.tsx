import React, {useEffect, useState} from 'react'

import * as styles from './hero.module.scss'

import Section from '../section/section'
import Whoami from '../whoami/whoami'
import Skills from '../skills/skills'

import Account from '../../assets/account.svg'
import Coding from '../../assets/coding.svg'
import HSkills from '../../assets/skills.svg'
import Teaching from '../../assets/teaching.svg'
import Things from '../../assets/things.svg'
import Others from '../others/others'
import {useThemeContext} from '../../utilities/themeContext'
import Timeline from '../../atoms/timeline/timeline'
import {about, events, works} from '../../utilities/info'
import Parallax from '../../atoms/parallax/parallax'
import Arrow from '../../assets/arrowUp.svg'

const Hero = (): JSX.Element => {
  const theme: string = useThemeContext()
  const [stroke, setStroke] = useState<string>('var(--orange)')

  const color = theme === 'dark' ? 'var(--svg-dark)' : 'var(--svg-light)'

  useEffect(() => {
    const interval = setInterval(() => {
      setStroke((stroke) =>
        stroke == 'var(--orange)'
          ? 'var(--pink)'
          : stroke == 'var(--pink)'
          ? 'var(--white)'
          : stroke == 'var(--white)'
          ? 'var(--orange)'
          : 'var(--orange)'
      )
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.wrapper}>
      <Whoami />
      <div className={styles.sectionWrap}>
        <div className={styles.parallax}>
          <Parallax />
        </div>
        <div className={styles.goDownWrap}>
          <Arrow
            width={50}
            stroke={stroke}
            className={styles.goDown}
            onClick={() => window.scroll(0, window.innerHeight * 0.95)}
          />
        </div>
        <Section title={'About me'} id={'about'} Svg={{svg: Account, stroke: color}}>
          <div className={styles.about} dangerouslySetInnerHTML={{__html: about}} />
        </Section>
        <Section title={'Work Experiences'} id={'works'} Svg={{svg: Coding, fill: color}} reversed>
          <div dangerouslySetInnerHTML={{__html: works}} />
        </Section>
        <Section title={'Hard skills'} id={'skills'} Svg={{svg: HSkills, fill: color}}>
          <Skills />
        </Section>
        <Section title={'Education'} id={'education'} Svg={{svg: Teaching, fill: color}} reversed>
          <Timeline events={events} />
        </Section>
        <Section title={'Other experiences'} id={'others'} Svg={{svg: Things, fill: color}}>
          <Others />
        </Section>
      </div>
    </div>
  )
}

export default Hero
