import React from "react";
import styles from './Messages.module.scss'
import {Message} from "./Message/Message";
import {Link} from "react-router-dom";


type MessagePropsType = {
    collapsedMessage: boolean
    setCollapsedMessage: (value: boolean) => void
}
export const Messages = (props: MessagePropsType) => {
    const {collapsedMessage, setCollapsedMessage} = props

        const styleMessageActive = collapsedMessage ? styles.messages : `${styles.messages} ${styles.active}`

    return <div className={styleMessageActive}>
        <div className={styles.messages__top}>
            <button>Clear all</button>
        </div>

        <div className={styles.messages__wrapper}>
            <Message setCollapsedMessage={setCollapsedMessage}/>
            <Message setCollapsedMessage={setCollapsedMessage}/>
        </div>
        <Link className={styles.messages__viewButton} to='/messages' onClick={()=>setCollapsedMessage(true)} >View All Messages</Link>
    </div>
}