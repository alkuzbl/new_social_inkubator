import styles from "../../UserMessageCard/UserMessageCard.module.scss";
import user from "../../../../assets/images/user.jpg";
import React from "react";

type UserCardPropsType = {
    user?: string
    name: string
    content?: string
    status?: string
    dataTime?: string
}

export const UserCard = (props: UserCardPropsType) => {
    const {content, name, status} = props


    return <div className={styles.userMessageCard}>
        <div className={styles.userMessageCard}>
            <div className={styles.userMessageCard__image}>
                <img className={styles.userMessageCard__img} src={user} alt="user"/>
            </div>
            <div className={styles.userMessageCard__contentBox}>
                <h4 className={styles.userMessageCard__name}>{name}</h4>
                <span className={styles.userMessageCard__content}> {status ? status : content} </span>
            </div>
        </div>
    </div>
}