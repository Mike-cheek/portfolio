import React from 'react'
import TypingEffect from '../../atoms/typingEffect/typingEffect'
import Profile from '../profile/profile'

import * as styles from './whoami.module.scss'

const Whoami = (): JSX.Element => {
    return <div>
            <p className={styles.introduce}>
                /*let me introduce myself*/
            </p>
            <div className={styles.wrap} >
                <Profile />
                <TypingEffect initialText="Hi, I'm Michele Pulvirenti." heading={true} fast={false} />
            </div>
        </div>
    
}

export default Whoami
