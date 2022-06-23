import React from 'react'

import * as styles from './arrowUp.module.scss'

import Arrow from '../../assets/arrowUp.svg'

const ArrowUp = (): JSX.Element => {
  //the logic of animation is on navBar.tsx

  return (
    <div
      className={styles.arrowUp}
      id={'arrowUp'}
      title={'Go to top'}
      onClick={() => {
        window.scroll(0, 0)
        // typeof window !== 'undefined' &&
        //   //@ts-ignore
        //   window.gtag('event', 'click', {event_category: 'Navigation', event_label: 'Go to top'})
      }}
    >
      <Arrow width={'50px'} height={'50px'} />
    </div>
  )
}

export default ArrowUp
