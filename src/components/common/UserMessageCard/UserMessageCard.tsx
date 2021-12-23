import React from "react";
import styles from "./UserMessageCard.module.scss";
import user from './../../../assets/images/user.jpg'

type UserMessageCardPropsType = {
    user?: string
    name: string
    content?: string
    status?: boolean
    dataTime?: string
    unreadCountMessage?: number | null
    activeClass?: boolean
}

export const UserMessageCard = (props: UserMessageCardPropsType) => {
    const {content, unreadCountMessage, name, status, dataTime, activeClass} = props

    const styleMessageActive = activeClass ?
        `${styles.userMessageCard} ${styles.active}` : styles.userMessageCard

    return <div className={styleMessageActive}>
        <div className={styles.userMessageCard}>
            <div className={styles.userMessageCard__image}>
                <img className={styles.userMessageCard__img} src={user} alt="user"/>
            </div>
            <div className={styles.userMessageCard__contentBox}>
                <h4 className={styles.userMessageCard__name}>{name}</h4>
                <span className={styles.userMessageCard__content}> {status ? status : content} </span>
            </div>
        </div>

        <div className={styles.userMessageCard__timeBox}>
            <div className={styles.dataTime}>{dataTime}</div>
            {unreadCountMessage && <p className={styles.iconCountMessage}>{unreadCountMessage}</p>}
        </div>
    </div>
}