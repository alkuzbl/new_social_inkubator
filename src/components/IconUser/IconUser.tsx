import React from "react";
import styles from "./IconUser.module.scss";



type IconUserPropsType = {
    user?: string
    size?: number
}

export const IconUser = (props: IconUserPropsType) => {
    const {user, size} = props


    return <div className={styles.iconImage}
                style={{width: `${size}px`, height:`${size}px`}}>
        <img className={styles.iconImage__img} src={user} alt="user"
             style={{width: `${size}px`, height:`${size}px`}}/>
    </div>
}
