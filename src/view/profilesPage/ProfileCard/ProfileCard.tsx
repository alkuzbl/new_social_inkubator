import React from "react";
import styles from './ProfileCard.module.scss'

import userImg from '../../../assets/images/user.jpg'

export const ProfileCard = () => {

    return <div className={styles.profileCard}>
        <div className={styles.profileCard__wrapper}>
            <div className={styles.profileCard__image}>
                <img className={styles.profileCard__img} src={userImg} alt="profile user"/>
            </div>

            <h4 className={styles.profileCard__name}>John Jhon</h4>
            <p className={styles.profileCard__about}>Lorem ipsum dolor sit amet</p>
            <div className={styles.profileCard__links}>
                <button className={styles.profileCard__button}>Follow</button>
                <a className={styles.profileCard__messageBtn} href="#"><span></span></a>
            </div>
        </div>
        <a href="#" className={styles.profileCard__link}>View Profile</a>
    </div>
}