import React, {useEffect} from 'react'
import GameHero from '../components/gameHero/gameHero'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import ReactGA from 'react-ga4'

const Game = () => {
  useEffect(() => {
    if (!ReactGA.isInitialized) ReactGA.initialize('G-TGB7YVN6K4')

    ReactGA.send({hitType: 'pageview', page: '/game', title: 'Game'})
  }, [])
  return (
    <>
      <SEO title={'Word Game'} description={'Play this word game'} />
      <Layout noMenu={true} noGameLink={true}>
        <GameHero />
      </Layout>
    </>
  )
}

export default Game
