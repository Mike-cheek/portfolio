import React from 'react'

import * as styles from './hero.module.scss'

import Section from '../section/section'
import Skills from '../skills/skills'

import HSkills from '../../assets/skills.svg'
import {about} from '../../utilities/info'
import BigHeading from '../bigHeading/bigHeading'
import Projects from '../projects/projects'
import Mike from '../../atoms/mike/mike'

const Hero = (): JSX.Element => {
  const color = 'var(--transparent-pink)'

  return (
    <div>
      <BigHeading />
      <div className={styles.sectionWrap}>
        <Section title={'About me'} id={'about'} Model3d={Mike}>
          <div className={styles.about} dangerouslySetInnerHTML={{__html: about}} />
        </Section>
        <Section title={'My projects'} id={'projects'} reversed>
          <Projects />
        </Section>
        <Section title={'Hard skills'} id={'skills'} Svg={{svg: HSkills, fill: color}}>
          <Skills />
        </Section>
      </div>
    </div>
  )
}

export default Hero
