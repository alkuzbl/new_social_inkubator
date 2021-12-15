import React, {useState} from "react";

import user from './../../../assets/images/user.jpg'
import styles from './UserInfo.module.scss'

type UserInfoPropsType = {
    callBackOnClick: () => void
}
export const UserInfo = (props: UserInfoPropsType) => {
    const {callBackOnClick} = props

    const onClickHandler = () => {
        callBackOnClick()
    }

    return <div className={styles.userInfo}>
        <img src={user} alt="user"/>
        <div className={styles.userInfo__userWrapper} onClick={onClickHandler}>
            <div className={styles.userInfo__userName} >
                <span> Sasha </span>
            </div>
            <button/>
        </div>
    </div>
}


