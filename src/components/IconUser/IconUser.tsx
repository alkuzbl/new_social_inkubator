import React from "react";
import styles from "./IconUser.module.scss";



type IconUserPropsType = {
    user?: string
}

export const IconUser = (props: IconUserPropsType) => {
    const {user} = props


    return <div className={styles.iconImage}>
        <img className={styles.iconImage__img} src={user} alt="user"/>
    </div>
}