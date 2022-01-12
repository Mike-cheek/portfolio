import React, { useState, useEffect } from 'react'
import detectBrowser from '../../utilities/detectBrowser'

import * as styles from "./layout.module.scss"

import { LayoutProps } from './layout.types'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Ball from '../../atoms/ball/ball'
import Separator from '../../atoms/separator/separator'
import ArrowUp from '../../atoms/arrowUp/arrowUp'

import BallMoving from '../../assets/ballMoving.svg'
import BallStill from '../../assets/ballStill.svg'

const Layout = ({ children, isBlocking = false }: LayoutProps): JSX.Element => {
    const [browser, setBrowser] = useState<string>('Safari')

    useEffect(() => {
        setBrowser(detectBrowser())
    }, [])

    return (
        <div id="top" className={styles.layout}>
            <NavBar isBlocking={isBlocking} />
            {
                browser === 'Safari' ?
                    <Ball BallSvg={BallStill} fastAnimation />
                    :
                    <Ball BallSvg={BallMoving} />
            }

            {children}

            <Separator />
            <Footer />
            <ArrowUp />
        </div>

    )
}

export default Layout
