import React from 'react'
import {TimelineProps} from './timeline.types'
import * as styles from './timeline.module.scss'

const Timeline = ({events}: TimelineProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {events
          .sort((a, b) => (a.dateStart > b.dateStart ? 1 : -1))
          .map((event, key) => {
            return (
              <div className={styles.event} key={key}>
                <div className={styles.line} />
                <p className={styles.date}>{event.dateStart}</p>
                <div className={styles.text}>
                  <p>
                    <strong>{event.name}</strong>
                  </p>
                  <div dangerouslySetInnerHTML={{__html: event.text}} />
                </div>
                <p className={styles.date}>{event.dateEnd}</p>
                <div className={styles.line} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Timeline
