import Image from 'next/image'
import React, {useContext} from 'react'
import CursorContext from '../../utilities/useCursorContext'
import * as styles from './index.module.scss'

const Index = () => {
  const {fitElement, unFit} = useContext(CursorContext)

  const handleMouseHover = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    fitElement(e.currentTarget)
  }
  const handleMouseLeave = () => {
    unFit()
  }

  const imagePath = (name: string) => `../../assets/images/screenshots/${name}.png`
  const imageMobilePath = (name: string) => `../../assets/images/screenshots/${name}-mobile.jpg`

  return (
    <div className={styles.projects}>
      {projectsList.map((project, key) => {
        return (
          <div className={key % 2 == 1 ? styles.projectReverse : styles.project} key={key}>
            <div className={styles.head}>
              <h3>{project.title}</h3>
              <em dangerouslySetInnerHTML={{__html: project.description}}></em>

              <Image
                src={imageMobilePath(project.image)}
                alt={project.title}
                className={styles.imageMobile}
                style={project.image == 'nt' ? {opacity: 0.4} : {}}
                loading={'lazy'}
                onError={() => {}}
              />

              <div className={styles.links}>
                <a
                  onMouseOver={(e) => handleMouseHover(e)}
                  onMouseEnter={(e) => handleMouseHover(e)}
                  onMouseOut={handleMouseLeave}
                  onMouseLeave={handleMouseLeave}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buttonStyle"
                >
                  Visit Website
                </a>
                {project.github && (
                  <a
                    onMouseOver={(e) => handleMouseHover(e)}
                    onMouseEnter={(e) => handleMouseHover(e)}
                    onMouseOut={handleMouseLeave}
                    onMouseLeave={handleMouseLeave}
                    href={project.github}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    className="buttonStyle"
                  >
                    Visit Repo
                  </a>
                )}
              </div>
            </div>
            <Image
              src={imagePath(project.image)}
              alt={project.title}
              className={styles.image}
              loading={'lazy'}
              onError={() => {}}
            />
          </div>
        )
      })}
    </div>
  )
}

const projectsList = [
  {
    title: 'Pop! Funding',
    image: 'pop',
    description: `A working crowdfunding web application based on Algorand Blockchain where anyone with Algo can create a funding or donate<br/><br/>
    This is the Project Work proposed by Algorand to the attendees of MasterZ 2nd Edition.<br/><br/>
    Doing this Project Work we had the opportunity to test and improve our knowledge of the Algorand blockchain and to learn how to use it in the development of a crowdfunding platform. `,
    href: 'https://pop-funding.vercel.app',
    github: 'https://github.com/MikeCheek/pop-funding',
  },
  {
    title: 'Naturalmente Tecnologici',
    image: 'nt',
    description: `Website created on the occasion of the Naturalmente Tecnologici event organized by the Syskrack association in Grassano (Matera)<br/><br/>
      During the event there were conferences and workshops on the theme of ethical and sustainable technological development in social and environmental terms.`,
    href: 'https://nt.syskrack.org',
    github: 'https://github.com/MikeCheek/naturalmente-tecnologici',
  },
  {
    title: 'Web Dev Challenge 2022',
    image: 'wdc',
    description: `Website created on the occasion of the Web Dev Challenge event organized by JEToP<br/><br/>
                The challenge was to develop in team a landing page on a specific theme`,
    href: 'https://wdc.jetop.com',
  },
]

export default Index
