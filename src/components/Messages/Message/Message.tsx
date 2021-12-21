import React from "react";
import styles from "./Message.module.scss";

type MessagePropsType = {
    setCollapsedMessage: (value: boolean) => void
}
export const Message = (props: MessagePropsType) => {
const {setCollapsedMessage} = props

    return <div className={styles.message}>
        <div className={styles.message__image}><img className={styles.message__img} src="#" alt="user"/></div>
        <div className={styles.message__content}>
            <div className={styles.message__inner}>
                <a className={styles.message__title} href='#' onClick={()=>setCollapsedMessage(true)}>Vasyz</a>
                <span className={styles.message__time}>2 min ago</span>
            </div>
            <p className={styles.message__text}>Message nkldlvn kvnelw lknew klnve</p>
        </div>
    </div>
}