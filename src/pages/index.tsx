import React, {useEffect} from 'react'
import Hero from '../components/hero/hero'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

import '../styles/globals.scss'

const IndexPage = (): JSX.Element => {
  const animateKeyDown = (key: KeyboardEvent) => {
    if (key.keyCode === 79)
      //o
      document.body.style.color = 'var(--orange)'
    if (key.keyCode === 80)
      //p
      document.body.style.color = 'var(--pink)'
    if (key.keyCode === 187) {
      //+
      document.body.style.transform = 'scale(1.5)'
      document.body.style.overflowX = 'scroll'
    }
    if (key.keyCode === 189)
      //-
      document.body.style.transform = 'scale(0.5)'
    if (key.keyCode === 85)
      //u
      document.body.style.textDecoration = 'underline'
    if (key.keyCode === 84)
      //t
      document.body.style.webkitTextStroke = 'thick'
  }
  const animateKeyUp = () => {
    document.body.removeAttribute('style')
  }

  useEffect(() => {
    document.addEventListener('keydown', animateKeyDown)
    document.addEventListener('keyup', animateKeyUp)

    return () => {
      document.removeEventListener('keydown', animateKeyDown)
      document.removeEventListener('keyup', animateKeyUp)
    }
  }, [])

  return (
    <>
      <SEO
        title={'Michele Pulvirenti'}
        description={
          "Since I was a child I have always had a passion for everything there is computer science, so I'm studying Computer Engineering."
        }
        googleSiteVerification={'I4IPeMDb8LK64z0WfFe8k8Ep4XWwHih824Fu6F8fy64'}
      />
      <Layout>
        <div>
          <Hero />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
