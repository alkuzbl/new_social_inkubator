import React from "react";
import styles from './Messages.module.scss'
import {Message} from "./Message/Message";


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
        <a className={styles.messages__viewButton} href='#' onClick={()=>setCollapsedMessage(true)} >View All Messages</a>
    </div>
}